export interface IAvatar {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAvatarResponse {
  data: {
    attributes: IAvatar;
  };
}
