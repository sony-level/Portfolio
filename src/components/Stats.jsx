import { stats } from "../constants";
import styles from "../style";
import  GitHubCalendar from 'react-github-calendar';

import { Row } from "react-bootstrap";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

    <div className="flex-1 flex justify-start items-center flex-row m-3">
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
            <p className="font-poppins font-normal xs:text-[30.89px] text-[29.89px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                Jours de <strong className="purple">Codage</strong>
            </p>
            <GitHubCalendar
                username="Sony-level"
                blockSize={15}
                blockMargin={2}
                color="#FFFFFF"
                fontSize={12}
                fullYear={false}

            />
        </Row>

    </div>
  </section>

);

export default Stats;