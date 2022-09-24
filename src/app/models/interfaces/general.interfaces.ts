interface IMessage {
  type: string;
  content: string;
  code: number;
}

interface ITransaction {
  status: boolean;
}

export interface IResponseRequest<IData> {
  data: IData;
  message: IMessage;
  transaction: ITransaction;
}
