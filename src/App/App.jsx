import style from "./app.module.scss";

import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";


function App() {
  return (
    <div className={style.app}>
      <div className={style.app__wraper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
