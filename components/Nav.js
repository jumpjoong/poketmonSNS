import React, { useContext } from "react";
import Style from "@/styles/layout.module.scss";
import { Statusgroup } from "@/context/StatusContext";
import { Create, Description, Home, MenuBook, Whatshot } from "@mui/icons-material";

const Nav = () => {
  const { pageStatus, setPageStatus, newbie } = useContext(Statusgroup);

  const mainBtnClick = () => {
    if (pageStatus !== "NEWBIE") setPageStatus("LIST");
  };
  const trendBtnClick = () => {
    if (pageStatus !== "NEWBIE") setPageStatus("TREND");
  };
  const encyclopediaBtnClick = () => {
    if (pageStatus !== "NEWBIE") setPageStatus("ENCYCLOPEDIA");
  };
  const writeBtnClick = () => {
    if (pageStatus !== "NEWBIE") setPageStatus("WRITE");
  };
  const mymsgBtnClick = () => {
    if (pageStatus !== "NEWBIE") setPageStatus("MYMSG");
  };

  return (
    <>
      <nav className={Style.nav_container}>
        <div className={Style.nav_btn_wrap}>
          <div className={Style.nav_home_btn} onClick={mainBtnClick}>
            {/* <svg width="30px" height="30px" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.8243 0.79783C13.0811 -0.26204 14.9189 -0.26204 16.1757 0.797845L26.3008 9.336C27.0611 9.97728 27.5 10.9213 27.5 11.9161V25.8808C27.5 27.3306 26.3248 28.5058 24.875 28.5058H19.625C18.1752 28.5058 17 27.3306 17 25.8808V18.3702C17 18.1632 16.8321 17.9952 16.625 17.9952H11.375C11.1678 17.9952 11 18.1632 11 18.3702V25.8808C11 27.3306 9.82475 28.5058 8.375 28.5058H3.125C1.67525 28.5058 0.5 27.3306 0.5 25.8808V11.9161C0.5 10.9213 0.938825 9.97728 1.69928 9.336L11.8243 0.79783ZM14.7252 2.5179C14.3063 2.1646 13.6937 2.1646 13.2748 2.5179L3.14977 11.0561C2.89628 11.2698 2.75 11.5845 2.75 11.9161V25.8808C2.75 26.088 2.9179 26.2558 3.125 26.2558H8.375C8.5821 26.2558 8.74999 26.088 8.74999 25.8808V18.3702C8.74999 16.9204 9.92525 15.7452 11.375 15.7452H16.625C18.0748 15.7452 19.25 16.9204 19.25 18.3702V25.8808C19.25 26.088 19.4179 26.2558 19.625 26.2558H24.875C25.0821 26.2558 25.25 26.088 25.25 25.8808V11.9161C25.25 11.5845 25.1038 11.2698 24.8503 11.0561L14.7252 2.5179Z"
                fill="#E06666"
              />
            </svg> */}
            <Home sx={{ color: "rgba(224, 102, 102)", background: "transparent" }} />
            <span>홈</span>
          </div>
          <div className={Style.nav_trend_btn} onClick={trendBtnClick}>
            {/* <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#E06666">
              <path d="M9.13 15l-.53-.77a1.85 1.85 0 0 0-.28-2.54 3.51 3.51 0 0 1-1.19-2c-1.56 2.23-.75 3.46 0 4.55l-.55.76A4.4 4.4 0 0 1 3 10.46S2.79 8.3 5.28 6.19c0 0 2.82-2.61 1.84-4.54L7.83 1a6.57 6.57 0 0 1 2.61 6.94 2.57 2.57 0 0 0 .56-.81l.87-.07c.07.12 1.84 2.93.89 5.3A4.72 4.72 0 0 1 9.13 15zm-2-6.95l.87.39a3 3 0 0 0 .92 2.48 2.64 2.64 0 0 1 1 2.8A3.241 3.241 0 0 0 11.8 12a4.87 4.87 0 0 0-.41-3.63 1.85 1.85 0 0 1-1.84.86l-.35-.68a5.31 5.31 0 0 0-.89-5.8C8.17 4.87 6 6.83 5.93 6.94 3.86 8.7 4 10.33 4 10.4a3.47 3.47 0 0 0 1.59 3.14C5 12.14 5 10.46 7.16 8.05h-.03z" />
            </svg> */}
            <Whatshot sx={{ color: "rgba(224, 102, 102)", background: "transparent" }} />
            <span>인기 글</span>
          </div>
          <div className={Style.nav_mymsg_btn} onClick={encyclopediaBtnClick}>
            {/* <svg width="30px" height="30px" viewBox="0 0 24 24" fill="E06666" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6472 4.2755C18.3543 3.89891 19.8891 3.97968 20.8292 4.10203C20.8592 4.10592 20.8911 4.11927 20.9256 4.16303C20.9637 4.21127 21 4.29459 21 4.40561V17.5662C21 17.8531 20.7538 18.0756 20.4978 18.0671C19.2792 18.027 17.4886 18.0635 15.7992 18.4717C14.6384 18.7522 13.7101 19.2206 13 19.7021V6.46564C13 6.22541 13.0548 6.10361 13.0945 6.05233C13.2183 5.89268 13.5973 5.55172 14.2498 5.18356C14.8798 4.82813 15.7 4.48446 16.6472 4.2755ZM21.0873 2.11876C19.9976 1.97693 18.2169 1.88113 16.2164 2.32246C15.0613 2.57728 14.0561 2.99648 13.2671 3.44169C12.5005 3.87417 11.8669 4.37162 11.514 4.82683C11.1078 5.35069 11 5.96564 11 6.46564V22C11 22.4411 11.289 22.83 11.7112 22.9574C12.1314 23.0841 12.5849 22.922 12.8297 22.5583L12.8315 22.5555L12.8304 22.5572L12.8297 22.5583C12.8297 22.5583 12.831 22.5564 12.8322 22.5546C12.8365 22.5485 12.8455 22.536 12.8591 22.5178C12.8864 22.4814 12.9324 22.4224 12.9974 22.3467C13.1277 22.195 13.3329 21.9779 13.6163 21.7398C14.1824 21.2641 15.0549 20.7091 16.269 20.4158C17.7048 20.0688 19.2899 20.0284 20.4319 20.066C21.8117 20.1115 23 18.9895 23 17.5662V4.40561C23 3.34931 22.2946 2.27587 21.0873 2.11876Z"
                fill="#E06666"
              />
              <path
                d="M7.35275 4.2755C5.64572 3.89891 4.11089 3.97968 3.17076 4.10203C3.14084 4.10592 3.10885 4.11927 3.07437 4.16303C3.03635 4.21127 3 4.29459 3 4.40561V17.5662C3 17.8531 3.24619 18.0756 3.50221 18.0671C4.72076 18.027 6.51143 18.0635 8.20077 18.4717C9.36161 18.7522 10.2899 19.2206 11 19.7021V6.46564C11 6.22541 10.9452 6.10361 10.9055 6.05233C10.7817 5.89268 10.4027 5.55172 9.75015 5.18356C9.12019 4.82813 8.29995 4.48446 7.35275 4.2755ZM2.91265 2.11876C4.00241 1.97693 5.78311 1.88113 7.78361 2.32246C8.9387 2.57728 9.94388 2.99648 10.7329 3.44169C11.4995 3.87417 12.1331 4.37162 12.486 4.82683C12.8922 5.35069 13 5.96564 13 6.46564V22C13 22.4411 12.711 22.83 12.2888 22.9574C11.8686 23.0841 11.4151 22.922 11.1703 22.5583L11.1685 22.5555L11.1696 22.5572L11.1703 22.5583C11.1703 22.5583 11.169 22.5564 11.1678 22.5546C11.1635 22.5485 11.1545 22.536 11.1409 22.5178C11.1136 22.4814 11.0676 22.4224 11.0026 22.3467C10.8723 22.195 10.6671 21.9779 10.3837 21.7398C9.81759 21.2641 8.94511 20.7091 7.73105 20.4158C6.2952 20.0688 4.71011 20.0284 3.56807 20.066C2.18834 20.1115 1 18.9895 1 17.5662V4.40561C1 3.34931 1.70543 2.27587 2.91265 2.11876Z"
                fill="#E06666"
              />
            </svg> */}
            <MenuBook sx={{ color: "rgba(224, 102, 102)", background: "transparent" }} />
            <span>도감</span>
          </div>
          <div className={Style.nav_more_btn} onClick={mymsgBtnClick}>
            {/* <svg width="30px" height="30px" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.5787 6.78029L44.4759 16.6772M3.90248 37.0803L2.57373 49.0753L14.5684 47.7465L48.8237 13.4731V9.43248L42.2165 2.82529H38.1759L3.90248 37.0803Z"
                stroke="#E06666"
                strokeWidth="3.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M32.4905 19.0494L15.9648 35.575" stroke="#E06666" strokeWidth="3.75" strokeMiterlimit="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> */}
            <Description sx={{ color: "rgba(224, 102, 102)", background: "transparent" }} />
            <span>작성한 글</span>
          </div>
          <div className={Style.nav_write_btn} onClick={writeBtnClick}>
            <Create sx={{ color: "rgba(224, 102, 102)", background: "transparent" }} />
            <span>새 글쓰기</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
