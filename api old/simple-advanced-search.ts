import axios from 'axios';
import { Language } from '@prisma/client';

const apiUrl = 'http://localhost:3000/api/advanced-search';

export const advancedSearch = async (searchTerm: string): Promise<Language[]> => {
    try {
        const response = await axios.get(apiUrl, {
        params: {
            original_text: searchTerm,
        },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
    }
