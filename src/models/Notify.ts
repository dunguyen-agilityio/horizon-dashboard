export class Notify {
  id!: string;
  message!: string;
  image?: string;
  createdAt!: Date;
  link!: string;
  unread?: boolean;

  constructor(notify: Notify) {
    const { createdAt, unread = false } = notify;
    Object.assign(this, { ...notify, createdAt: new Date(createdAt), unread });
  }
}
