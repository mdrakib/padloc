import { BaseElement, element, html, css, svg, property } from "./base";

@element("pl-logo")
export class Logo extends BaseElement {
    @property({ reflect: true })
    reveal: boolean = false;

    static styles = [
        css`
            :host {
                position: relative;
                display: block;
                width: 11em;
                height: 3.2em;
            }

            :host([reveal]) .padloc > * {
                stroke-dashoffset: 0;
            }

            svg {
                width: 100%;
                height: 100%;
                fill: none;
                stroke: currentColor;
                stroke-linecap: round;
                stroke-width: 7;
            }

            .padloc > * {
                transition: stroke-dashoffset 1.4s cubic-bezier(0.57, 0.25, 0, 0.99);
                stroke-dashoffset: 0;
            }

            .p {
                stroke-dashoffset: 234px;
                stroke-dasharray: 234px;
                transition-delay: 0s;
            }

            .a {
                stroke-dashoffset: 190px;
                stroke-dasharray: 190px;
                transition-delay: 0.1s;
            }

            .d {
                stroke-dashoffset: 232px;
                stroke-dasharray: 232px;
                transition-delay: 0.2s;
            }

            .l {
                stroke-dashoffset: 155px;
                stroke-dasharray: 155px;
                transition-delay: 0.3s;
            }

            .o {
                stroke-dashoffset: 168px;
                stroke-dasharray: 168px;
                transition-delay: 0.4s;
            }

            .c {
                stroke-dashoffset: 237px;
                stroke-dasharray: 237px;
                transition-delay: 0.5s;
            }
        `,
    ];

    _logo() {
        return svg`
        <svg viewBox="0 -12 380 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>

                <filter id="shadow">
                    <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" in="shadowOffsetOuter1"/>
                </filter>

            </defs>

            <g class="padloc shadow" filter="url(#shadow)">

                <path class="p" d="M26.4525939,21 C31.4460596,21 35.9653942,22.1535365 40.0107335,24.460644 C44.0560727,26.7677515 47.2322485,29.9439273 49.539356,33.9892665 C51.8464635,38.0346058 53,42.5539404 53,47.5474061 C53,52.4776633 51.8464635,56.9653942 49.539356,61.0107335 C47.2322485,65.0560727 44.0560727,68.2322485 40.0107335,70.539356 C35.9653942,72.8464635 31.4460596,74 26.4525939,74 C21.9647957,74 17.9037153,73.036086 14.2692308,71.108229 C10.6347463,69.180372 7.77460792,66.5414598 5.68872987,63.1914132 L5.68872987,92.7728086 C5.68872987,93.6577265 5.43589996,94.3530088 4.93023256,94.8586762 C4.42456515,95.3643436 3.7292829,95.6171735 2.84436494,95.6171735 C2.0226554,95.6171735 1.34317502,95.3643436 0.805903399,94.8586762 C0.26863178,94.3530088 1.13686838e-13,93.6577265 1.13686838e-13,92.7728086 L1.13686838e-13,46.9785331 C0.0632084258,42.1114843 1.2641505,37.6869609 3.60286225,33.7048301 C5.94157401,29.7226992 9.11774976,26.609731 13.1314848,24.3658318 C17.1452198,22.1219327 21.5855451,21 26.4525939,21 Z M26.4525939,68.6905188 C30.3715163,68.6905188 33.9111351,67.7740104 37.0715564,65.940966 C40.2319776,64.1079217 42.728673,61.5796226 44.5617174,58.3559928 C46.3947617,55.1323631 47.3112701,51.5295369 47.3112701,47.5474061 C47.3112701,43.5652753 46.3947617,39.962449 44.5617174,36.7388193 C42.728673,33.5151896 40.2319776,30.9710886 37.0715564,29.1064401 C33.9111351,27.2417915 30.3715163,26.3094812 26.4525939,26.3094812 C22.5336715,26.3094812 18.9940528,27.2417915 15.8336315,29.1064401 C12.6732102,30.9710886 10.1923167,33.5151896 8.39087657,36.7388193 C6.58943643,39.962449 5.68872987,43.5652753 5.68872987,47.5474061 C5.68872987,51.5295369 6.58943643,55.1323631 8.39087657,58.3559928 C10.1923167,61.5796226 12.6732102,64.1079217 15.8336315,65.940966 C18.9940528,67.7740104 22.5336715,68.6905188 26.4525939,68.6905188 Z"></path>

                <path class="a" d="M101.903818,21 C106.834075,21 111.321806,22.1535365 115.367145,24.460644 C119.412485,26.7677515 122.58866,29.9439273 124.895768,33.9892665 C127.202876,38.0346058 128.356412,42.5539404 128.356412,47.5474061 L128.356412,70.5867621 C128.356412,71.4084716 128.103582,72.087952 127.597915,72.6252236 C127.092247,73.1624952 126.396965,73.431127 125.512047,73.431127 C124.690338,73.431127 124.010857,73.1624952 123.473586,72.6252236 C122.936314,72.087952 122.667682,71.4084716 122.667682,70.5867621 L122.667682,63.1914132 C120.581804,66.5414598 117.721666,69.180372 114.087181,71.108229 C110.452697,73.036086 106.391616,74 101.903818,74 C96.9103524,74 92.3910178,72.8464635 88.3456785,70.539356 C84.3003393,68.2322485 81.1241635,65.0560727 78.817056,61.0107335 C76.5099484,56.9653942 75.356412,52.4776633 75.356412,47.5474061 C75.356412,42.5539404 76.5099484,38.0346058 78.817056,33.9892665 C81.1241635,29.9439273 84.3003393,26.7677515 88.3456785,24.460644 C92.3910178,22.1535365 96.9103524,21 101.903818,21 Z M101.903818,68.6905188 C105.82274,68.6905188 109.362359,67.7740104 112.52278,65.940966 C115.683202,64.1079217 118.164095,61.5796226 119.965535,58.3559928 C121.766976,55.1323631 122.667682,51.5295369 122.667682,47.5474061 C122.667682,43.5652753 121.766976,39.962449 119.965535,36.7388193 C118.164095,33.5151896 115.683202,30.9710886 112.52278,29.1064401 C109.362359,27.2417915 105.82274,26.3094812 101.903818,26.3094812 C97.9848957,26.3094812 94.4452769,27.2417915 91.2848556,29.1064401 C88.1244343,30.9710886 85.627739,33.5151896 83.7946946,36.7388193 C81.9616503,39.962449 81.0451419,43.5652753 81.0451419,47.5474061 C81.0451419,51.5295369 81.9616503,55.1323631 83.7946946,58.3559928 C85.627739,61.5796226 88.1244343,64.1079217 91.2848556,65.940966 C94.4452769,67.7740104 97.9848957,68.6905188 101.903818,68.6905188 Z"></path>

                <path class="d" d="M200.453612,1 C201.33121,1 202.020742,1.2507387 202.522227,1.75222363 C203.023712,2.25370856 203.27445,2.94324 203.27445,3.82083863 L203.27445,49.2363405 C203.211765,54.063133 202.020756,58.4510603 199.701388,62.4002541 C197.38202,66.349448 194.232115,69.4366682 190.251579,71.6620076 C186.271042,73.887347 181.867444,75 177.040651,75 C172.088487,75 167.606533,73.8560047 163.594654,71.5679797 C159.582774,69.2799547 156.432869,66.1300497 154.144844,62.1181703 C151.856819,58.1062908 150.712824,53.6243365 150.712824,48.6721728 C150.712824,43.7826947 151.856819,39.3320827 154.144844,35.3202033 C156.432869,31.3083239 159.582774,28.1584189 163.594654,25.8703939 C167.606533,23.5823689 172.088487,22.4383736 177.040651,22.4383736 C181.49133,22.4383736 185.51882,23.3943149 189.123243,25.3062262 C192.727666,27.2181375 195.564148,29.8352227 197.632773,33.1575604 L197.632773,3.82083863 C197.632773,2.94324 197.899183,2.25370856 198.432011,1.75222363 C198.964838,1.2507387 199.638699,1 200.453612,1 Z M177.040651,69.7344346 C180.927159,69.7344346 184.437501,68.8098356 187.571782,66.9606099 C190.706063,65.1113842 193.166436,62.588326 194.952976,59.3913596 C196.739517,56.1943932 197.632773,52.6213666 197.632773,48.6721728 C197.632773,44.722979 196.739517,41.1499525 194.952976,37.952986 C193.166436,34.7560196 190.706063,32.2486326 187.571782,30.4307497 C184.437501,28.6128668 180.927159,27.703939 177.040651,27.703939 C173.154143,27.703939 169.643801,28.6128668 166.50952,30.4307497 C163.375239,32.2486326 160.899195,34.7560196 159.081312,37.952986 C157.263429,41.1499525 156.354501,44.722979 156.354501,48.6721728 C156.354501,52.6213666 157.263429,56.1943932 159.081312,59.3913596 C160.899195,62.588326 163.375239,65.1113842 166.50952,66.9606099 C169.643801,68.8098356 173.154143,69.7344346 177.040651,69.7344346 Z"></path>

                <path class="l" d="M230,2.8425096 C230,2.02133606 230.268457,1.34229889 230.805378,0.805377721 C231.342299,0.268456556 232.021336,0 232.84251,0 C233.663683,0 234.34272,0.268456556 234.879641,0.805377721 C235.416563,1.34229889 235.685019,2.02133606 235.685019,2.8425096 L235.685019,71.1574904 C235.685019,71.9786639 235.416563,72.6577011 234.879641,73.1946223 C234.34272,73.7315434 233.663683,74 232.84251,74 C232.021336,74 231.342299,73.7315434 230.805378,73.1946223 C230.268457,72.6577011 230,71.9786639 230,71.1574904 L230,2.8425096 Z"></path>

                <path class="o" d="M286.957975,22 C291.888232,22 296.375963,23.1535365 300.421302,25.460644 C304.466642,27.7677515 307.642817,30.9439273 309.949925,34.9892665 C312.257032,39.0346058 313.410569,43.5539404 313.410569,48.5474061 C313.410569,53.4776633 312.257032,57.9653942 309.949925,62.0107335 C307.642817,66.0560727 304.466642,69.2322485 300.421302,71.539356 C296.375963,73.8464635 291.888232,75 286.957975,75 C281.964509,75 277.445175,73.8464635 273.399835,71.539356 C269.354496,69.2322485 266.17832,66.0560727 263.871213,62.0107335 C261.564105,57.9653942 260.410569,53.4776633 260.410569,48.5474061 C260.410569,43.5539404 261.564105,39.0346058 263.871213,34.9892665 C266.17832,30.9439273 269.354496,27.7677515 273.399835,25.460644 C277.445175,23.1535365 281.964509,22 286.957975,22 Z M286.957975,27.3094812 C283.039052,27.3094812 279.499434,28.2417915 276.339012,30.1064401 C273.178591,31.9710886 270.681896,34.5151896 268.848851,37.7388193 C267.015807,40.962449 266.099299,44.5652753 266.099299,48.5474061 C266.099299,52.5295369 267.015807,56.1323631 268.848851,59.3559928 C270.681896,62.5796226 273.178591,65.1079217 276.339012,66.940966 C279.499434,68.7740104 283.039052,69.6905188 286.957975,69.6905188 C290.876897,69.6905188 294.416516,68.7740104 297.576937,66.940966 C300.737359,65.1079217 303.218252,62.5796226 305.019692,59.3559928 C306.821132,56.1323631 307.721839,52.5295369 307.721839,48.5474061 C307.721839,44.5652753 306.821132,40.962449 305.019692,37.7388193 C303.218252,34.5151896 300.737359,31.9710886 297.576937,30.1064401 C294.416516,28.2417915 290.876897,27.3094812 286.957975,27.3094812 Z"></path>

                <path class="c" d="M359.820963,22 C363.873552,22 367.577816,22.7915094 370.933866,24.374552 C374.289917,25.9575945 377.202671,28.3004624 379.672218,31.4032258 C380.115469,32.0364428 380.337092,32.5746692 380.337092,33.0179211 C380.337092,33.904425 379.893847,34.6009533 379.007343,35.1075269 C378.564091,35.4874571 378.057525,35.6774194 377.48763,35.6774194 C376.601126,35.6774194 375.872937,35.2974948 375.303042,34.5376344 C371.250453,29.725185 366.089812,27.3189964 359.820963,27.3189964 C356.148304,27.3189964 352.887286,28.2213171 350.037809,30.0259857 C347.188332,31.8306542 344.987936,34.3476541 343.436554,37.5770609 C341.885173,40.8064678 341.109494,44.447411 341.109494,48.5 C341.109494,52.4892673 341.964324,56.0985502 343.67401,59.327957 C345.383696,62.5573638 347.758224,65.0901939 350.797666,66.9265233 C353.837107,68.7628527 357.319749,69.6810036 361.245694,69.6810036 C366.818004,69.6810036 371.282117,68.1296451 374.638167,65.0268817 C375.208063,64.4569864 375.872931,64.172043 376.632791,64.172043 C377.32933,64.172043 377.899217,64.3936656 378.342468,64.8369176 C378.975685,65.4068129 379.292289,66.1033412 379.292289,66.9265233 C379.292289,67.623062 379.039006,68.1929488 378.532433,68.6362007 C376.316173,70.6624952 373.720022,72.2296838 370.743902,73.3378136 C367.767782,74.4459434 364.601744,75 361.245694,75 C356.369923,75 351.969131,73.8443963 348.043185,71.5331541 C344.11724,69.221912 341.030353,66.0400442 338.782433,61.9874552 C336.534512,57.9348662 335.410569,53.4390928 335.410569,48.5 C335.410569,43.4975855 336.455361,38.9859819 338.544977,34.9650538 C340.634594,30.9441257 343.547348,27.778088 347.283329,25.4668459 C351.019309,23.1556037 355.198479,22 359.820963,22 Z"></path>

            </g>

            <g class="padloc">

                <path class="p" d="M26.4525939,21 C31.4460596,21 35.9653942,22.1535365 40.0107335,24.460644 C44.0560727,26.7677515 47.2322485,29.9439273 49.539356,33.9892665 C51.8464635,38.0346058 53,42.5539404 53,47.5474061 C53,52.4776633 51.8464635,56.9653942 49.539356,61.0107335 C47.2322485,65.0560727 44.0560727,68.2322485 40.0107335,70.539356 C35.9653942,72.8464635 31.4460596,74 26.4525939,74 C21.9647957,74 17.9037153,73.036086 14.2692308,71.108229 C10.6347463,69.180372 7.77460792,66.5414598 5.68872987,63.1914132 L5.68872987,92.7728086 C5.68872987,93.6577265 5.43589996,94.3530088 4.93023256,94.8586762 C4.42456515,95.3643436 3.7292829,95.6171735 2.84436494,95.6171735 C2.0226554,95.6171735 1.34317502,95.3643436 0.805903399,94.8586762 C0.26863178,94.3530088 1.13686838e-13,93.6577265 1.13686838e-13,92.7728086 L1.13686838e-13,46.9785331 C0.0632084258,42.1114843 1.2641505,37.6869609 3.60286225,33.7048301 C5.94157401,29.7226992 9.11774976,26.609731 13.1314848,24.3658318 C17.1452198,22.1219327 21.5855451,21 26.4525939,21 Z M26.4525939,68.6905188 C30.3715163,68.6905188 33.9111351,67.7740104 37.0715564,65.940966 C40.2319776,64.1079217 42.728673,61.5796226 44.5617174,58.3559928 C46.3947617,55.1323631 47.3112701,51.5295369 47.3112701,47.5474061 C47.3112701,43.5652753 46.3947617,39.962449 44.5617174,36.7388193 C42.728673,33.5151896 40.2319776,30.9710886 37.0715564,29.1064401 C33.9111351,27.2417915 30.3715163,26.3094812 26.4525939,26.3094812 C22.5336715,26.3094812 18.9940528,27.2417915 15.8336315,29.1064401 C12.6732102,30.9710886 10.1923167,33.5151896 8.39087657,36.7388193 C6.58943643,39.962449 5.68872987,43.5652753 5.68872987,47.5474061 C5.68872987,51.5295369 6.58943643,55.1323631 8.39087657,58.3559928 C10.1923167,61.5796226 12.6732102,64.1079217 15.8336315,65.940966 C18.9940528,67.7740104 22.5336715,68.6905188 26.4525939,68.6905188 Z"></path>

                <path class="a" d="M101.903818,21 C106.834075,21 111.321806,22.1535365 115.367145,24.460644 C119.412485,26.7677515 122.58866,29.9439273 124.895768,33.9892665 C127.202876,38.0346058 128.356412,42.5539404 128.356412,47.5474061 L128.356412,70.5867621 C128.356412,71.4084716 128.103582,72.087952 127.597915,72.6252236 C127.092247,73.1624952 126.396965,73.431127 125.512047,73.431127 C124.690338,73.431127 124.010857,73.1624952 123.473586,72.6252236 C122.936314,72.087952 122.667682,71.4084716 122.667682,70.5867621 L122.667682,63.1914132 C120.581804,66.5414598 117.721666,69.180372 114.087181,71.108229 C110.452697,73.036086 106.391616,74 101.903818,74 C96.9103524,74 92.3910178,72.8464635 88.3456785,70.539356 C84.3003393,68.2322485 81.1241635,65.0560727 78.817056,61.0107335 C76.5099484,56.9653942 75.356412,52.4776633 75.356412,47.5474061 C75.356412,42.5539404 76.5099484,38.0346058 78.817056,33.9892665 C81.1241635,29.9439273 84.3003393,26.7677515 88.3456785,24.460644 C92.3910178,22.1535365 96.9103524,21 101.903818,21 Z M101.903818,68.6905188 C105.82274,68.6905188 109.362359,67.7740104 112.52278,65.940966 C115.683202,64.1079217 118.164095,61.5796226 119.965535,58.3559928 C121.766976,55.1323631 122.667682,51.5295369 122.667682,47.5474061 C122.667682,43.5652753 121.766976,39.962449 119.965535,36.7388193 C118.164095,33.5151896 115.683202,30.9710886 112.52278,29.1064401 C109.362359,27.2417915 105.82274,26.3094812 101.903818,26.3094812 C97.9848957,26.3094812 94.4452769,27.2417915 91.2848556,29.1064401 C88.1244343,30.9710886 85.627739,33.5151896 83.7946946,36.7388193 C81.9616503,39.962449 81.0451419,43.5652753 81.0451419,47.5474061 C81.0451419,51.5295369 81.9616503,55.1323631 83.7946946,58.3559928 C85.627739,61.5796226 88.1244343,64.1079217 91.2848556,65.940966 C94.4452769,67.7740104 97.9848957,68.6905188 101.903818,68.6905188 Z"></path>

                <path class="d" d="M200.453612,1 C201.33121,1 202.020742,1.2507387 202.522227,1.75222363 C203.023712,2.25370856 203.27445,2.94324 203.27445,3.82083863 L203.27445,49.2363405 C203.211765,54.063133 202.020756,58.4510603 199.701388,62.4002541 C197.38202,66.349448 194.232115,69.4366682 190.251579,71.6620076 C186.271042,73.887347 181.867444,75 177.040651,75 C172.088487,75 167.606533,73.8560047 163.594654,71.5679797 C159.582774,69.2799547 156.432869,66.1300497 154.144844,62.1181703 C151.856819,58.1062908 150.712824,53.6243365 150.712824,48.6721728 C150.712824,43.7826947 151.856819,39.3320827 154.144844,35.3202033 C156.432869,31.3083239 159.582774,28.1584189 163.594654,25.8703939 C167.606533,23.5823689 172.088487,22.4383736 177.040651,22.4383736 C181.49133,22.4383736 185.51882,23.3943149 189.123243,25.3062262 C192.727666,27.2181375 195.564148,29.8352227 197.632773,33.1575604 L197.632773,3.82083863 C197.632773,2.94324 197.899183,2.25370856 198.432011,1.75222363 C198.964838,1.2507387 199.638699,1 200.453612,1 Z M177.040651,69.7344346 C180.927159,69.7344346 184.437501,68.8098356 187.571782,66.9606099 C190.706063,65.1113842 193.166436,62.588326 194.952976,59.3913596 C196.739517,56.1943932 197.632773,52.6213666 197.632773,48.6721728 C197.632773,44.722979 196.739517,41.1499525 194.952976,37.952986 C193.166436,34.7560196 190.706063,32.2486326 187.571782,30.4307497 C184.437501,28.6128668 180.927159,27.703939 177.040651,27.703939 C173.154143,27.703939 169.643801,28.6128668 166.50952,30.4307497 C163.375239,32.2486326 160.899195,34.7560196 159.081312,37.952986 C157.263429,41.1499525 156.354501,44.722979 156.354501,48.6721728 C156.354501,52.6213666 157.263429,56.1943932 159.081312,59.3913596 C160.899195,62.588326 163.375239,65.1113842 166.50952,66.9606099 C169.643801,68.8098356 173.154143,69.7344346 177.040651,69.7344346 Z"></path>

                <path class="l" d="M230,2.8425096 C230,2.02133606 230.268457,1.34229889 230.805378,0.805377721 C231.342299,0.268456556 232.021336,0 232.84251,0 C233.663683,0 234.34272,0.268456556 234.879641,0.805377721 C235.416563,1.34229889 235.685019,2.02133606 235.685019,2.8425096 L235.685019,71.1574904 C235.685019,71.9786639 235.416563,72.6577011 234.879641,73.1946223 C234.34272,73.7315434 233.663683,74 232.84251,74 C232.021336,74 231.342299,73.7315434 230.805378,73.1946223 C230.268457,72.6577011 230,71.9786639 230,71.1574904 L230,2.8425096 Z"></path>

                <path class="o" d="M286.957975,22 C291.888232,22 296.375963,23.1535365 300.421302,25.460644 C304.466642,27.7677515 307.642817,30.9439273 309.949925,34.9892665 C312.257032,39.0346058 313.410569,43.5539404 313.410569,48.5474061 C313.410569,53.4776633 312.257032,57.9653942 309.949925,62.0107335 C307.642817,66.0560727 304.466642,69.2322485 300.421302,71.539356 C296.375963,73.8464635 291.888232,75 286.957975,75 C281.964509,75 277.445175,73.8464635 273.399835,71.539356 C269.354496,69.2322485 266.17832,66.0560727 263.871213,62.0107335 C261.564105,57.9653942 260.410569,53.4776633 260.410569,48.5474061 C260.410569,43.5539404 261.564105,39.0346058 263.871213,34.9892665 C266.17832,30.9439273 269.354496,27.7677515 273.399835,25.460644 C277.445175,23.1535365 281.964509,22 286.957975,22 Z M286.957975,27.3094812 C283.039052,27.3094812 279.499434,28.2417915 276.339012,30.1064401 C273.178591,31.9710886 270.681896,34.5151896 268.848851,37.7388193 C267.015807,40.962449 266.099299,44.5652753 266.099299,48.5474061 C266.099299,52.5295369 267.015807,56.1323631 268.848851,59.3559928 C270.681896,62.5796226 273.178591,65.1079217 276.339012,66.940966 C279.499434,68.7740104 283.039052,69.6905188 286.957975,69.6905188 C290.876897,69.6905188 294.416516,68.7740104 297.576937,66.940966 C300.737359,65.1079217 303.218252,62.5796226 305.019692,59.3559928 C306.821132,56.1323631 307.721839,52.5295369 307.721839,48.5474061 C307.721839,44.5652753 306.821132,40.962449 305.019692,37.7388193 C303.218252,34.5151896 300.737359,31.9710886 297.576937,30.1064401 C294.416516,28.2417915 290.876897,27.3094812 286.957975,27.3094812 Z"></path>

                <path class="c" d="M359.820963,22 C363.873552,22 367.577816,22.7915094 370.933866,24.374552 C374.289917,25.9575945 377.202671,28.3004624 379.672218,31.4032258 C380.115469,32.0364428 380.337092,32.5746692 380.337092,33.0179211 C380.337092,33.904425 379.893847,34.6009533 379.007343,35.1075269 C378.564091,35.4874571 378.057525,35.6774194 377.48763,35.6774194 C376.601126,35.6774194 375.872937,35.2974948 375.303042,34.5376344 C371.250453,29.725185 366.089812,27.3189964 359.820963,27.3189964 C356.148304,27.3189964 352.887286,28.2213171 350.037809,30.0259857 C347.188332,31.8306542 344.987936,34.3476541 343.436554,37.5770609 C341.885173,40.8064678 341.109494,44.447411 341.109494,48.5 C341.109494,52.4892673 341.964324,56.0985502 343.67401,59.327957 C345.383696,62.5573638 347.758224,65.0901939 350.797666,66.9265233 C353.837107,68.7628527 357.319749,69.6810036 361.245694,69.6810036 C366.818004,69.6810036 371.282117,68.1296451 374.638167,65.0268817 C375.208063,64.4569864 375.872931,64.172043 376.632791,64.172043 C377.32933,64.172043 377.899217,64.3936656 378.342468,64.8369176 C378.975685,65.4068129 379.292289,66.1033412 379.292289,66.9265233 C379.292289,67.623062 379.039006,68.1929488 378.532433,68.6362007 C376.316173,70.6624952 373.720022,72.2296838 370.743902,73.3378136 C367.767782,74.4459434 364.601744,75 361.245694,75 C356.369923,75 351.969131,73.8443963 348.043185,71.5331541 C344.11724,69.221912 341.030353,66.0400442 338.782433,61.9874552 C336.534512,57.9348662 335.410569,53.4390928 335.410569,48.5 C335.410569,43.4975855 336.455361,38.9859819 338.544977,34.9650538 C340.634594,30.9441257 343.547348,27.778088 347.283329,25.4668459 C351.019309,23.1556037 355.198479,22 359.820963,22 Z"></path>

            </g>
        </svg>`;
    }
    render() {
        return html` ${this._logo()} `;
    }
}
