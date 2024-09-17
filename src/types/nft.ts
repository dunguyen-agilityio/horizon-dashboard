// Models
import { NFT } from '@/models/NFT';

export interface INFTResponse {
  id: number;
  attributes: Omit<NFT, 'id'>;
}
