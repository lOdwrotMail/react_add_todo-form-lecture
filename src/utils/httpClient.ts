const API_URL = 'https://mate.academy/students-api';

export const httpClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(API_URL + endpoint);

    if (!response.ok) {
      throw new Error(`Can't load from '${endpoint}'`);
    }

    return response.json();
  },
  post: async <T>(endpoint: string, data: any): Promise<T> => {
    const response = await fetch(API_URL + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Can't post from '${endpoint}'`);
    }

    return response.json();
  },
  patch: async <T>(endpoint: string, data: any): Promise<T> => {
    const response = await fetch(API_URL + endpoint, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Can't patch from '${endpoint}'`);
    }

    return response.json();
  },
  delete: async (endpoint: string) => {
    const response = await fetch(API_URL + endpoint, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Can't delete from '${endpoint}'`);
    }

    return response;
  },
};
