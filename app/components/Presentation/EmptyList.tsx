import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import { FC } from "react";
interface Props {
  listName: string;
}

export const EmptyList: FC<Props> = ({ listName }) => {
  const { mainListStyle, listItemStyle, mainListComponentStyle } = useStyle();
  const { translate } = useTranslation();
  return (
    <>
      <div className={` ${mainListComponentStyle}  `}>
        {translate(listName)}
        <div className={mainListStyle}>
          <div className={listItemStyle}>{"no data"}</div>
        </div>
      </div>
    </>
  );
};
