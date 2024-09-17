export interface IAvatar {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAvatarData {
  data: {
    attributes: IAvatar;
  };
}
