import useAxiosSecure from './apiClient/useAxiosSecure';
import useAuthContext from './useAuthContext'
import { useQuery } from '@tanstack/react-query'

const useUserRole = () => {
  const { user, isUserLoading } = useAuthContext();
  const { privateApi } = useAxiosSecure();

  const {
    data: role = 'user',
    isLoading: roleLoading,
    refetch
  } = useQuery({
    queryKey: ['userRole', user?.email],
    enabled: !isUserLoading && !!user?.email,
    queryFn: async () => {
      const res = await privateApi.get(`users/${user?.email}/role`);
      return res?.role || 'user';
    }
  });

  return { role, roleLoading, refetch };
}

export default useUserRole