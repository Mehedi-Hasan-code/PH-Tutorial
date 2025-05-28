import React from 'react';
import {
  MapPin,
  DollarSign,
  Building2,
  Clock,
  Mail,
  User,
  CheckCircle,
  Briefcase,
  Tag,
} from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate()
  const jobData = useLoaderData();
  const formatSalary = (min, max, currency) => {
    const currencySymbol = currency.toLowerCase() === 'bdt' ? '৳' : '$';
    return `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isDeadlineNear = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 7;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={jobData.company_logo}
                  alt={`${jobData.company} logo`}
                  className="w-16 h-16 rounded-lg bg-white p-2 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {jobData.title}
                  </h1>
                  <p className="text-blue-100 text-lg font-medium">
                    {jobData.company}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    jobData.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {jobData.status.charAt(0).toUpperCase() +
                    jobData.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Job Info Grid */}
          <div className="px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    {jobData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Job Type</p>
                  <p className="font-medium text-gray-900">{jobData.jobType}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Tag className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium text-gray-900">
                    {jobData.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Salary Range</p>
                  <p className="font-medium text-gray-900">
                    {formatSalary(
                      jobData.salaryRange.min,
                      jobData.salaryRange.max,
                      jobData.salaryRange.currency
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {jobData.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {jobData.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Requirements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {jobData.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Deadline */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Application Deadline
                </h3>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  isDeadlineNear(jobData.applicationDeadline)
                    ? 'bg-red-50 border border-red-200'
                    : 'bg-gray-50'
                }`}
              >
                <p
                  className={`text-lg font-medium ${
                    isDeadlineNear(jobData.applicationDeadline)
                      ? 'text-red-700'
                      : 'text-gray-900'
                  }`}
                >
                  {formatDate(jobData.applicationDeadline)}
                </p>
                {isDeadlineNear(jobData.applicationDeadline) && (
                  <p className="text-sm text-red-600 mt-1">
                    ⚠️ Deadline approaching soon!
                  </p>
                )}
              </div>
            </div>

            {/* HR Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900">
                  HR Contact
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700 font-medium">
                    {jobData.hr_name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a
                    href={`mailto:${jobData.hr_email}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {jobData.hr_email}
                  </a>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <button onClick={() => navigate(`/apply/${jobData._id}`)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Apply Now
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Click to submit your application
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">Company</h3>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={jobData.company_logo}
                  alt={`${jobData.company} logo`}
                  className="w-12 h-12 rounded-lg bg-gray-100 p-2 object-contain"
                />
                <div>
                  <p className="font-medium text-gray-900">{jobData.company}</p>
                  <p className="text-sm text-gray-500">View company profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
