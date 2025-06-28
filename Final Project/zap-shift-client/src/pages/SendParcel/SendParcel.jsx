import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import dayjs from 'dayjs';
import { useLoaderData } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
import { v4 as uuidv4 } from 'uuid'; // 👈 import uuid
import useAxiosSecure from '../../hooks/apiClient/useAxiosSecure';

const generateTrackingId = () => {
  return `TRK-${uuidv4().split('-')[0]}`; // Shorten UUID
};

const SendParcel = () => {
  const { publicApi } = useAxiosSecure();
  const { user } = useAuthContext();
  const serviceCenterData = useLoaderData();
  const [regions, setRegions] = useState([]);
  const [filteredSenderDistricts, setFilteredSenderDistricts] = useState([]);
  const [filteredReceiverDistricts, setFilteredReceiverDistricts] = useState(
    []
  );

  const { register, handleSubmit, watch, reset } = useForm();

  const watchType = watch('type');
  const senderRegion = watch('sender_region');
  const receiverRegion = watch('receiver_region');

  useEffect(() => {
    const uniqueRegions = [...new Set(serviceCenterData.map((d) => d.region))];
    setRegions(uniqueRegions);
  }, [serviceCenterData]);

  useEffect(() => {
    if (senderRegion) {
      const districts = serviceCenterData
        .filter((d) => d.region === senderRegion)
        .map((d) => d.district);
      setFilteredSenderDistricts(districts);
    }
  }, [senderRegion, serviceCenterData]);

  useEffect(() => {
    if (receiverRegion) {
      const districts = serviceCenterData
        .filter((d) => d.region === receiverRegion)
        .map((d) => d.district);
      setFilteredReceiverDistricts(districts);
    }
  }, [receiverRegion, serviceCenterData]);

  const onSubmit = (formData) => {
    const weight = Number(formData.weight || 0);
    const baseCost = formData.type === 'document' ? 50 : 100 + weight * 10;

    toast((t) => (
      <div>
        <p className="font-semibold text-lg">Delivery Cost: ৳{baseCost}</p>
        <button
          className="btn btn-sm btn-success mt-2"
          onClick={() => {
            toast.dismiss(t.id);
            const parcel = {
              ...formData,
              creation_date: dayjs().format(),
              created_by: user.email,
              delivery_status: 'not_collected',
              payment_status: 'unpaid',
              tracking_id: generateTrackingId(),
            };
            console.log('Saving to DB:', parcel);
            publicApi.post('/parcel', parcel)
            .then((data) => {
              if (data.acknowledged === true && data.insertedId) {
                toast.success('Parcel saved!');
                reset();
                // redirect ot payment page
              }
            })
          }}
        >
          Confirm
        </button>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="label">Type</label>
            <select
              className="select select-bordered w-full"
              {...register('type', { required: true })}
            >
              <option value="">Select Type</option>
              <option value="document">Document</option>
              <option value="non-document">Non-Document</option>
            </select>
          </div>
          <div>
            <label className="label">Title</label>
            <input
              className="input input-bordered w-full"
              {...register('title', { required: true })}
            />
          </div>
          {watchType === 'non-document' && (
            <div>
              <label className="label">Weight (kg)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register('weight')}
              />
            </div>
          )}
        </div>

        {/* Sender Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="hidden" value="John Doe" {...register('sender_name')} />
          <div>
            <label className="label">Sender Contact</label>
            <input
              className="input input-bordered w-full"
              {...register('sender_contact', { required: true })}
            />
          </div>
          <div>
            <label className="label">Sender Region</label>
            <select
              className="select select-bordered w-full"
              {...register('sender_region', { required: true })}
            >
              <option value="">Select Region</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Sender Service Center</label>
            <select
              className="select select-bordered w-full"
              {...register('sender_service_center', { required: true })}
            >
              <option value="">Select District</option>
              {filteredSenderDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Sender Address</label>
            <input
              className="input input-bordered w-full"
              {...register('sender_address', { required: true })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="label">Pickup Instruction</label>
            <textarea
              rows={3}
              className="textarea textarea-bordered w-full"
              {...register('pickup_instruction', { required: true })}
            />
          </div>
        </div>

        {/* Receiver Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Receiver Name</label>
            <input
              className="input input-bordered w-full"
              {...register('receiver_name', { required: true })}
            />
          </div>
          <div>
            <label className="label">Receiver Contact</label>
            <input
              className="input input-bordered w-full"
              {...register('receiver_contact', { required: true })}
            />
          </div>
          <div>
            <label className="label">Receiver Region</label>
            <select
              className="select select-bordered w-full"
              {...register('receiver_region', { required: true })}
            >
              <option value="">Select Region</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Receiver Service Center</label>
            <select
              className="select select-bordered w-full"
              {...register('receiver_service_center', { required: true })}
            >
              <option value="">Select District</option>
              {filteredReceiverDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Receiver Address</label>
            <input
              className="input input-bordered w-full"
              {...register('receiver_address', { required: true })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="label">Delivery Instruction</label>
            <textarea
              rows={3}
              className="textarea textarea-bordered w-full"
              {...register('delivery_instruction', { required: true })}
            />
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-6">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
