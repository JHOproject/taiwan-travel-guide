export interface IResponse<T> {
  status?: number
  Message?: string
  // exceptionData: IException | null;
  data: T
}

// export interface IException {
//   exceptionCode: string;
//   mail: string;
//   page: string;
//   sysCode: string;
//   sysMsg: string;
// }
