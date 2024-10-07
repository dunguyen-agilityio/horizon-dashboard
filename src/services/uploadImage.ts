import { API_ENDPOINT } from '@/constants/environment';
import { ImageResponse } from '@/types/image';

export const uploadImageToStrapi = async (
  file: File,
): Promise<ImageResponse[]> => {
  const formData = new FormData();
  formData.append('files', file);

  try {
    const response = await fetch(`${API_ENDPOINT}/upload`, {
      method: 'POST',
      body: formData,
    });

    return response.json();
  } catch (error) {
    throw new Error('Error uploading file');
  }
};
