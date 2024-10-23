export interface BoardInterface {
  id: string;
  personId: string;
  boardRole: string;
  isNew: true;
}

export interface MainBoardInterface {
  boardRole: BoardInterface[];
}
