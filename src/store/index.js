import { createStore } from 'vuex';
const format = require('date-stringifier');

export default createStore({
    state: {
        partidas: [],
        usuario: JSON.parse(localStorage.getItem('user')) || { name: '', tag: '' },
        svgs: {
            arrow: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30.021px" height="30.021px" viewBox="0 0 30.021 30.021" style="enable-background:new 0 0 30.021 30.021;"xml:space="preserve"><g><path d="M29.069,22.276c-0.791,0.932-1.917,1.409-3.052,1.409c-0.913,0-1.834-0.312-2.587-0.949l-8.42-7.152l-8.42,7.151c-1.683,1.43-4.208,1.225-5.639-0.459c-1.43-1.686-1.224-4.208,0.46-5.64l11.01-9.351c1.493-1.269,3.686-1.269,5.178,0l11.011,9.351C30.294,18.068,30.499,20.591,29.069,22.276z"/></g></svg>`,
            assists: `<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.925 12.75H18.85V16.4687C18.85 19.1051 17.1341 21.25 15.025 21.25C12.9159 21.25 11.2 19.1051 11.2 16.4687V8.39375L7.75218 10.9836C6.72687 11.7473 6.09999 13.1352 6.09999 14.6227V17.7637L1.84999 20.8316C1.03718 21.416 0.755616 22.7176 1.22843 23.7336L5.47843 32.9375C5.94593 33.9535 6.98718 34.2988 7.79999 33.7145L13.2931 29.75H20.55C22.4253 29.75 23.95 27.8441 23.95 25.5H24.8C25.7403 25.5 26.5 24.5504 26.5 23.375V19.125H26.925C27.6316 19.125 28.2 18.4145 28.2 17.5312V14.3437C28.2 13.4605 27.6316 12.75 26.925 12.75ZM34.7716 10.2664L30.5216 1.0625C30.0541 0.0464822 29.0128 -0.29883 28.2 0.285545L22.7069 4.25H17.2775C16.64 4.25 16.0184 4.47578 15.4766 4.89414L13.6969 6.28203C13.1975 6.66719 12.9 7.35117 12.9 8.08164V16.4687C12.9 17.9363 13.8509 19.125 15.025 19.125C16.1991 19.125 17.15 17.9363 17.15 16.4687V10.625H26.925C28.5666 10.625 29.9 12.2918 29.9 14.3437V16.2363L34.15 13.1684C34.9628 12.5773 35.2391 11.2824 34.7716 10.2664V10.2664Z" fill="black"/></svg>`,
            kills: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.625 26.5625V30.8125C27.625 32.5723 26.1973 34 24.4375 34H21.25V30.8125C21.25 30.2281 20.7719 29.75 20.1875 29.75C19.6031 29.75 19.125 30.2281 19.125 30.8125V34H14.875V30.8125C14.875 30.2281 14.3969 29.75 13.8125 29.75C13.2281 29.75 12.75 30.2281 12.75 30.8125V34H9.5625C7.80273 34 6.375 32.5723 6.375 30.8125V26.5625C6.375 26.5359 6.375 26.516 6.37566 26.4895C2.48891 23.7602 0 19.5699 0 14.875C0 6.66055 7.61016 0 17 0C26.3898 0 34 6.66055 34 14.875C34 19.5699 31.5098 23.7602 27.5652 26.4895C27.5652 26.516 27.625 26.5359 27.625 26.5625ZM10.625 12.75C8.28086 12.75 6.375 14.6559 6.375 17C6.375 19.3441 8.28086 21.25 10.625 21.25C12.9691 21.25 14.875 19.3441 14.875 17C14.875 14.6559 12.9691 12.75 10.625 12.75ZM23.375 21.25C25.7191 21.25 27.625 19.3441 27.625 17C27.625 14.6559 25.7191 12.75 23.375 12.75C21.0309 12.75 19.125 14.6559 19.125 17C19.125 19.3441 21.0309 21.25 23.375 21.25Z" fill="black"/></svg>`,
            body: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.2803 14.0553L25.7143 9.375V1.875C25.7143 1.37772 25.4885 0.900806 25.0867 0.549175C24.6848 0.197544 24.1397 0 23.5714 0L21.4286 0C21.1113 8.63746e-05 20.8012 0.0822624 20.5371 0.236191L18.863 1.21307C17.7197 1.88191 16.3753 2.23892 15 2.23892C13.6247 2.23892 12.2803 1.88191 11.137 1.21307L9.46286 0.236191C9.19884 0.0822624 8.88869 8.63746e-05 8.57143 0L6.42857 0C5.86025 0 5.31521 0.197544 4.91334 0.549175C4.51148 0.900806 4.28571 1.37772 4.28571 1.875V9.375L0.719732 14.0553C0.250425 14.6713 -4.74873e-06 15.395 0 16.1354L0 28.125C0 28.6223 0.225765 29.0992 0.627628 29.4508C1.02949 29.8025 1.57454 30 2.14286 30H12.8571V16.875C12.8571 16.6735 12.8943 16.4733 12.9672 16.2821L13.8706 13.9102L10.0572 3.90023C11.5653 4.64748 13.267 5.04426 15 5.05277C16.733 5.04415 18.4347 4.64732 19.9428 3.90012L15 16.875V30H27.8571C28.4255 30 28.9705 29.8025 29.3724 29.4508C29.7742 29.0992 30 28.6223 30 28.125V16.1354C30 15.395 29.7496 14.6713 29.2803 14.0553V14.0553ZM8.79321 21.7566L5.57893 24.5691C5.37685 24.7398 5.10621 24.8343 4.82528 24.8322C4.54436 24.8301 4.27563 24.7315 4.07698 24.5576C3.87833 24.3838 3.76565 24.1487 3.76321 23.9029C3.76077 23.6571 3.86876 23.4203 4.06393 23.2434L7.27821 20.4309C7.48029 20.2602 7.75093 20.1657 8.03186 20.1678C8.31278 20.1699 8.58151 20.2685 8.78016 20.4424C8.97881 20.6162 9.09149 20.8513 9.09394 21.0971C9.09638 21.3429 8.98838 21.5797 8.79321 21.7566ZM25.9361 24.5691C25.8366 24.6561 25.7185 24.7252 25.5886 24.7724C25.4586 24.8195 25.3193 24.8437 25.1786 24.8437C25.0379 24.8437 24.8986 24.8195 24.7686 24.7724C24.6386 24.7252 24.5205 24.6561 24.4211 24.5691L21.2068 21.7566C21.0116 21.5797 20.9036 21.3429 20.9061 21.0971C20.9085 20.8513 21.0212 20.6162 21.2198 20.4424C21.4185 20.2685 21.6872 20.1699 21.9681 20.1678C22.2491 20.1657 22.5197 20.2602 22.7218 20.4309L25.9361 23.2434C26.0356 23.3305 26.1145 23.4338 26.1684 23.5475C26.2222 23.6612 26.25 23.7831 26.25 23.9062C26.25 24.0294 26.2222 24.1513 26.1684 24.265C26.1145 24.3787 26.0356 24.482 25.9361 24.5691V24.5691Z" fill="black"/></svg>`,
            damage: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3334 6.79111C28.1422 4.34667 24.7111 2.34667 20.72 3.51111C18.9426 4.12622 17.3683 5.21779 16.1689 6.66667C15.2296 7.89612 14.486 9.26337 13.9645 10.72L19.7956 13.3333L14.8445 18.0089L16.8889 20.4444L15.4934 21.6356L12.2934 17.8844L16.5067 13.8756L11.6711 11.7333C12.0979 10.0085 12.7874 8.35959 13.7156 6.84445C14.0004 6.36871 14.3151 5.9115 14.6578 5.47556H14.7111C13.7254 4.5688 12.5413 3.9052 11.2534 3.53778C7.28002 2.36445 3.8578 4.34667 2.66669 6.79111C0.99558 10.2133 1.68891 14.0622 4.72891 18.2311C7.11114 21.4933 10.5156 24.8 15.4578 28.64C15.614 28.7618 15.8064 28.828 16.0045 28.828C16.2025 28.828 16.3949 28.7618 16.5511 28.64C21.4845 24.8089 24.8978 21.5289 27.28 18.2311C30.3111 14.0622 31.0045 10.2133 29.3334 6.79111V6.79111Z" fill="black"/></svg>`,
            elo: `<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 -0.000499725C16.2937 -0.000499725 16.575 0.0630003 16.8375 0.182063L28.6063 5.17438C29.9813 5.7575 31.0125 7.1125 31 8.69375C30.9688 14.95 28.4187 26.2938 17.65 31.45C16.6062 31.9438 15.3938 31.9438 14.35 31.45C3.57812 26.2938 1.03063 14.95 0.94375 8.69375C0.991875 7.1125 2.02 5.7575 3.39375 5.17438L15.1687 0.182063C15.425 0.0630003 15.7125 -0.000499725 16 -0.000437225V-0.000499725ZM16 27.8C24.5688 23.625 26.9438 14.3812 27 8.8375L16 4.17313V27.8Z" fill="black"/></svg>`,
            heads: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.6258 15.6247V18.1977H28.2123C27.945 20.8488 26.8701 23.1155 24.9876 24.998C23.1052 26.8804 20.8273 27.9776 18.154 28.2895V33.703H15.5809V28.2895C12.9076 27.9776 10.6353 26.886 8.76396 25.0147C6.89264 23.1434 5.80103 20.871 5.48915 18.1977H0.1091V15.6247H5.48915C5.80103 12.9959 6.89821 10.7291 8.78067 8.8244C10.6631 6.91966 12.9299 5.83363 15.5809 5.5663V0.152832H18.154V5.5663C20.805 5.83363 23.0773 6.91966 24.9709 8.8244C26.8645 10.7291 27.945 12.9959 28.2123 15.6247H33.6258V15.6247ZM18.154 22.6755V25.7164C20.0698 25.4491 21.7351 24.6137 23.1497 23.2102C24.5644 21.8067 25.4053 20.1359 25.6727 18.1977H22.5984V15.6247H25.6727C25.4053 13.7088 24.5644 12.0491 23.1497 10.6456C21.7351 9.24211 20.0698 8.4067 18.154 8.13937V11.2137H15.5809V8.13937C13.665 8.4067 11.9998 9.24211 10.5852 10.6456C9.17052 12.0491 8.32954 13.7088 8.06221 15.6247H11.1365V18.1977H8.06221C8.32954 20.1359 9.17052 21.8067 10.5852 23.2102C11.9998 24.6137 13.665 25.4491 15.5809 25.7164V22.6755H18.154ZM16.8507 14.8227C17.43 14.8227 17.9312 15.0287 18.3545 15.4409C18.7777 15.853 18.9894 16.3487 18.9894 16.9279C18.9894 17.5071 18.7777 18.0084 18.3545 18.4316C17.9312 18.8549 17.43 19.0665 16.8507 19.0665C16.2715 19.0665 15.7758 18.8549 15.3637 18.4316C14.9516 18.0084 14.7455 17.5071 14.7455 16.9279C14.7455 16.3487 14.9516 15.853 15.3637 15.4409C15.7758 15.0287 16.2715 14.8227 16.8507 14.8227V14.8227Z" fill="black"/></svg>`,
            legs: `<svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.84493 11.9343L6.10876 1.39291C6.14279 1.23446 6.23013 1.09248 6.3562 0.990641C6.48227 0.888806 6.63945 0.83328 6.80151 0.833328H14.2794C14.7058 0.833328 15.0373 1.20733 14.9523 1.62524C13.8537 6.99937 8.70834 12.7475 8.70834 12.7475L9.61572 14.274C10.1791 15.2217 10.4538 16.3132 10.4062 17.4147L10.125 23.9172L11.4305 25.5195C11.6777 25.8228 11.8377 26.1877 11.8931 26.5751C11.9485 26.9625 11.8973 27.3577 11.745 27.7181L11.706 27.8116C11.595 28.0742 11.4306 28.3108 11.2234 28.5066C11.0162 28.7024 10.7705 28.853 10.5021 28.949C10.2336 29.0449 9.94819 29.0841 9.66381 29.064C9.37944 29.0439 9.10232 28.965 8.85001 28.8323C8.29955 28.5431 7.66726 28.4492 7.05651 28.566L4.23593 29.105C4.14809 29.122 4.05884 29.1305 3.9703 29.1305H1.62501C1.24929 29.1305 0.888952 28.9813 0.623276 28.7156C0.357599 28.4499 0.208344 28.0896 0.208344 27.7139V26.8965H2.33334L6.93751 25.035L3.96322 16.0016C3.82202 15.5728 3.75005 15.1242 3.75001 14.6727V12.8268C3.75001 12.5265 3.78189 12.2276 3.84493 11.9343Z" fill="black"/></svg>`,
            level: `<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.3781 9.03437L18.4437 7.88125L14.8969 0.690623C14.8 0.493748 14.6406 0.334373 14.4437 0.237498C13.95 -0.00625217 13.35 0.196873 13.1031 0.690623L9.55625 7.88125L1.62187 9.03437C1.40312 9.06562 1.20312 9.16875 1.05 9.325C0.864878 9.51527 0.762869 9.77125 0.766384 10.0367C0.7699 10.3021 0.878653 10.5553 1.06875 10.7406L6.80937 16.3375L5.45312 24.2406C5.42132 24.4245 5.44166 24.6135 5.51185 24.7864C5.58203 24.9593 5.69925 25.109 5.85021 25.2187C6.00117 25.3283 6.17983 25.3935 6.36593 25.4067C6.55204 25.42 6.73813 25.3809 6.90312 25.2937L14 21.5625L21.0969 25.2937C21.2906 25.3969 21.5156 25.4312 21.7312 25.3937C22.275 25.3 22.6406 24.7844 22.5469 24.2406L21.1906 16.3375L26.9312 10.7406C27.0875 10.5875 27.1906 10.3875 27.2219 10.1687C27.3062 9.62187 26.925 9.11562 26.3781 9.03437V9.03437Z" fill="black"/></svg>`,
            map: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path d="M508.952,427.62l-99.004-203.744c-10.921-22.474-43.022-22.454-53.933,0l-53.396,109.885l-46.747-82.455			c-11.47-20.232-40.694-20.232-52.164,0l-10.636,18.761l-36.162-91.885c-0.158-0.403-0.344-0.788-0.518-1.181			c-10.896-24.543-45.659-23.264-55.281,1.181L56.667,291.114L2.108,429.744c-7.74,19.666,6.796,40.962,27.899,40.962			c17.115,0,435.788,0,451.98,0C504.056,470.706,518.636,447.546,508.952,427.62z M153.228,296.76l-24.217,18.183l-21.755-31.174			l-22.69,18.326l44.445-112.934l44.445,112.933L153.228,296.76z M246.339,359.668l-36-32.625l-24.885,17.253l44.336-78.204			l44.336,78.204L246.339,359.668z M392.591,323.666l-15.75,29.741l-16.875-38.466l-21.477,13.603l44.493-91.565l44.494,91.566			C411.879,328.545,419.585,329.52,392.591,323.666z"/>	</g></g><g>	<g>		<circle cx="284.03" cy="109.352" r="68.058"/>	</g></g></svg>`,
            rounds: `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.0938 13C23.0945 15.1907 22.343 17.3152 20.965 19.0183C19.587 20.7213 17.6661 21.8996 15.5234 22.356C13.3808 22.8124 11.1464 22.5192 9.19403 21.5256C7.24162 20.532 5.68958 18.8981 4.7975 16.8972L1.84163 18.0979C3.0134 20.7827 5.07382 22.9823 7.67649 24.3267C10.2792 25.6712 13.2654 26.0786 16.1331 25.4804C19.0007 24.8823 21.5751 23.315 23.4232 21.0421C25.2713 18.7693 26.2806 15.9294 26.2812 13C26.2814 10.3389 25.4489 7.74451 23.9004 5.58035C22.352 3.41618 20.1652 1.79074 17.6466 0.931821C15.1279 0.072906 12.4037 0.023568 9.85558 0.790722C7.30749 1.55788 5.06329 3.10307 3.4375 5.20975V1.3125H0.25V9.8125L1.84375 11.4063H9.28125V8.21875H5.248C6.3001 6.3948 7.9248 4.96911 9.86998 4.16291C11.8152 3.35671 13.9721 3.21508 16.006 3.76001C18.0399 4.30493 19.837 5.50594 21.1186 7.17665C22.4002 8.84737 23.0945 10.8944 23.0938 13Z" fill="black"/></svg>`,
            spent: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0283 0.25C9.8288 0.25 6.91329 1.30683 5.1885 2.17029C5.03267 2.24821 4.88746 2.32471 4.75217 2.39838C4.48442 2.54429 4.25634 2.68029 4.075 2.8L6.03709 5.68858L6.96075 6.05621C10.5704 7.87733 15.4112 7.87733 19.0215 6.05621L20.0699 5.51221L21.9257 2.8C21.5412 2.54925 21.1414 2.32284 20.7286 2.12212C19.013 1.26787 16.1677 0.25 13.0283 0.25ZM8.46454 3.51967C7.76975 3.38965 7.08352 3.21744 6.40967 3.004C8.02538 2.28646 10.4337 1.525 13.0276 1.525C14.8247 1.525 16.524 1.8905 17.9293 2.35375C16.2824 2.58538 14.525 2.9785 12.8505 3.46229C11.533 3.84337 9.99313 3.80229 8.46454 3.51967ZM19.7695 7.10667L19.596 7.1945C15.6244 9.19767 10.3572 9.19767 6.38559 7.1945L6.22125 7.11092C0.25567 13.6566 -4.29891 25.7479 13.0283 25.7479C30.3542 25.7479 25.6884 13.4307 19.7695 7.10667ZM12.2917 13C11.9159 13 11.5556 13.1493 11.2899 13.4149C11.0243 13.6806 10.875 14.0409 10.875 14.4167C10.875 14.7924 11.0243 15.1527 11.2899 15.4184C11.5556 15.6841 11.9159 15.8333 12.2917 15.8333V13ZM13.7083 11.5833V10.875H12.2917V11.5833C11.5402 11.5833 10.8196 11.8818 10.2882 12.4132C9.75685 12.9446 9.45834 13.6652 9.45834 14.4167C9.45834 15.1681 9.75685 15.8888 10.2882 16.4201C10.8196 16.9515 11.5402 17.25 12.2917 17.25V20.0833C11.9987 20.0834 11.7129 19.9926 11.4736 19.8235C11.2344 19.6544 11.0535 19.4153 10.9558 19.1391C10.8932 18.962 10.7628 18.8169 10.5933 18.7359C10.4238 18.6549 10.2291 18.6445 10.0519 18.707C9.87477 18.7696 9.72972 18.9 9.64869 19.0695C9.56766 19.239 9.55728 19.4337 9.61984 19.6109C9.81522 20.1634 10.1771 20.6417 10.6556 20.98C11.1341 21.3183 11.7057 21.5 12.2917 21.5V22.2083H13.7083V21.5C14.4598 21.5 15.1805 21.2015 15.7118 20.6701C16.2432 20.1388 16.5417 19.4181 16.5417 18.6667C16.5417 17.9152 16.2432 17.1946 15.7118 16.6632C15.1805 16.1318 14.4598 15.8333 13.7083 15.8333V13C14.3246 13 14.8495 13.3931 15.045 13.9442C15.074 14.0344 15.1208 14.1178 15.1826 14.1896C15.2444 14.2613 15.32 14.32 15.4048 14.362C15.4897 14.404 15.5821 14.4286 15.6767 14.4343C15.7712 14.44 15.8659 14.4267 15.9552 14.3952C16.0445 14.3636 16.1266 14.3145 16.1966 14.2506C16.2666 14.1868 16.323 14.1096 16.3626 14.0236C16.4023 13.9376 16.4242 13.8445 16.4272 13.7498C16.4302 13.6551 16.4142 13.5608 16.3802 13.4725C16.1848 12.92 15.8229 12.4416 15.3444 12.1033C14.866 11.765 14.2944 11.5833 13.7083 11.5833ZM13.7083 17.25V20.0833C14.0841 20.0833 14.4444 19.9341 14.7101 19.6684C14.9757 19.4027 15.125 19.0424 15.125 18.6667C15.125 18.2909 14.9757 17.9306 14.7101 17.6649C14.4444 17.3993 14.0841 17.25 13.7083 17.25Z" fill="black"/></svg>`,
            timer: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve"><g>	<g>		<path d="M432.272,68.692l-20.554,35.567l71.221,41.109l20.555-35.568c5.661-9.873,2.29-22.4-7.545-28.104l-35.567-20.555			C450.542,55.443,437.977,58.814,432.272,68.692z"/>		<path d="M306,92.56c13,0,25.699,1.272,38.25,3.065V62.357l26.297-0.201V19.125C370.547,8.554,361.993,0,351.422,0h-90.643			c-10.571,0-19.125,8.554-19.125,19.125v43.031l26.096,0.201v33.268C280.301,93.832,293,92.56,306,92.56z"/>		<path d="M306,114.75c-137.312,0-248.625,111.312-248.625,248.625S168.688,612,306,612s248.625-111.312,248.625-248.625			S443.312,114.75,306,114.75z M422.185,480.229L277.312,379.933V238.34h41.808v119.689l126.86,87.827L422.185,480.229z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
            clock: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve"><g><g><path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.8,489,244.5S379.8,0,244.5,0z M265.3,447.4V437c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v10.4c-95.8-9.8-172.3-86.3-182-182H51c11.4,0,20.8-9.4,20.8-20.8s-9.4-20.8-20.8-20.8h-9.3c9.8-95.8,86.3-172.3,182-182V51c0,11.4,9.4,20.8,20.8,20.8s20.8-9.4,20.8-20.8v-9.3c95.8,9.8,172.3,86.3,182,182H437c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h10.4C437.6,361.1,361.1,437.6,265.3,447.4z"/><path d="M244.5,124.9c-11.4,0-20.8,9.4-20.8,20.8v91.5L129,353.8c-7.3,9.4-5.2,21.8,3.1,29.1c11.6,8.5,23.9,2.1,28.1-3.1l101-122.8c2.1-3.1,4.2-7.3,4.2-12.5v-98.8C265.3,134.2,256,124.9,244.5,124.9z"/></g></g></svg>`
        }
    },
    mutations: {
        async setUser(state, user) {
            state.usuario = user;
        },
        async setPartidas(state, resposta) {
            state.partidas = resposta;
            let divmain = document.querySelector('.principal');
            divmain.style.display = 'flex';
            let bodystats = document.querySelector('.bodystats');
            bodystats.style.display = 'flex'
            let load = document.querySelector('.preloader.loading')
            load.style.display = 'none';
        }
    },
    actions: {
        async getMatchs(state) {
            let load = document.querySelector('.preloader.loading');
            load.style.display = 'block';
            let body = document.querySelector('.bodystats');
            body.style.display = 'none';
            const response = await fetch(`https://api.henrikdev.xyz/valorant/v3/matches/na/${state.state.usuario.name}/${state.state.usuario.tag}`)

            let resposta = (await response.json()).data;

            await state.commit('setPartidas', resposta)
        },
        setMatches(store) {
            const clear = (something) => {
                something.innerHTML = ''

                let h1 = document.createElement("h1");
                something.appendChild(h1);

                h1.textContent = `${store.state.usuario.name}'s last matches`;
            };
            let element = document.querySelector(".principal");

            if (element) {
                clear(element);
            }

            store.state.partidas.forEach((partida, index) => {
                //SCOPED VARIABLES
                let modo = partida.metadata.mode?.toLowerCase();
                let jogador = partida.players.all_players.find((jogador) => {
                    return jogador.name === store.state.usuario.name;
                });
                let jogadorVenceu =
                    partida?.teams?.[
                        partida.players.all_players
                            .find((jogador) => {
                                return jogador.name === store.state.usuario.name;
                            })
                            .team.toLowerCase()
                    ]?.has_won;
                //elementos
                const arrow = document.createElement("div");
                const fixed = document.createElement("div");
                const tipoPartida = document.createElement("h2");
                const personagemNome = document.createElement("p");
                const result = document.createElement("p");
                const line = document.createElement("div");
                const agentImageDiv = document.createElement("div");
                const personagemAvatar = document.createElement("img");
                const card = document.createElement("div");
                const matchData = document.createElement("div");
                const mapa = document.createElement("p");
                const data = document.createElement("p");

                //INSERT DATA
                arrow.className = "girinho";
                arrow.innerHTML = store.state.svgs.arrow;
                data.className = "duracao";
                data.textContent = format(new Date(partida.metadata.game_start * 1000), '{ago}')
                mapa.textContent = partida.metadata.map;
                mapa.className = "mapa";
                tipoPartida.textContent = partida.metadata.mode;
                fixed.className = "fixed";
                card.className = "vermais";
                card.id = `match${index}`;
                line.className = "hl";
                agentImageDiv.className = "agentimage";
                personagemAvatar.src = jogador.assets.agent.small;
                personagemNome.textContent = jogador.character;
                result.className = "result";
                matchData.className = "matchdata";

                if (modo == "competitive" || ("unranked" && jogadorVenceu == false)) {
                    result.textContent = "LOSS";
                } else if (
                    modo == "competitive" ||
                    ("unranked" && jogadorVenceu == true)
                ) {
                    result.textContent = "WIN";
                } else {
                    result.textContent = "----";
                }
                fixed.addEventListener("click", function () {
                    card.classList.toggle("selected");
                });

                element.appendChild(card);
                card.appendChild(fixed);
                card.appendChild(matchData);

                const appendToFixed = [arrow, data, mapa, tipoPartida, personagemNome, agentImageDiv, line, result]
                appendToFixed.forEach(el => fixed.appendChild(el))

                agentImageDiv.appendChild(personagemAvatar);

                store.dispatch("desc", { partida, matchData, modo });
            });
        },
        desc(store, { partida, matchData, modo }) {
            let jogadores = partida.players.all_players;
            let playersNeutral = document.createElement("div");
            let playersRed = document.createElement("div");
            let playersBlue = document.createElement("div");
            let playersList = document.createElement("div");
            let nickTag = document.createElement("p");
            let jogador = partida.players.all_players.find((jogador) => {
                return jogador.name === store.state.usuario.name;
            });
            matchData.innerHTML = `
              <div class="data">
                <div class="info mobile"> ${store.state.svgs.map} <p>Map: ${partida.metadata.map
                }</p> </div>
                <div class="info"> ${store.state.svgs.elo} <p>Elo: ${jogador.currenttier_patched
                }</p> </div>
                <div class="info"> ${store.state.svgs.kills} <p>Kills: ${jogador.stats.kills
                } </p> </div>
                <div class="info">${store.state.svgs.assists}<p>Assists: ${jogador.stats.assists
                } </p> </div>
                ${modo == "deathmatch"
                    ? ``
                    : ` <div class="info"> ${store.state.svgs.spent}<p>Spent: ${jogador.economy.spent.overall} </p> </div>`
                } 
                <div class='info'> ${store.state.svgs.timer} <p>Duration: ${(partida.metadata.game_length / 60000).toFixed(0) + " Minutes"
                } </p>  </div>
                <div class="info"> ${store.state.svgs.rounds} <p> Rounds: ${partida.metadata.rounds_played
                } </p> </div>
              </div>
              <div class="data">
                <div class='info mobile'> ${store.state.svgs.clock} <p>Time: ${format(new Date(partida.metadata.game_start * 1000), '{ago}')
                } </p>  </div>
                <div class="info">${store.state.svgs.level} <p> Level: ${jogador.level
                } </p> </div>
                <div class="info"> ${store.state.svgs.heads} <p> Head Shots: ${jogador.stats.headshots
                } </p> </div>
                <div class="info"> ${store.state.svgs.body} <p> Body Shots: ${jogador.stats.bodyshots
                } </p> </div>
                <div class="info"> ${store.state.svgs.legs} <p> Leg Shots: ${jogador.stats.legshots
                } </p> </div>
                <div class="info">${store.state.svgs.kills} <p>Deaths: ${jogador.stats.deaths
                } </p> </div>
                ${modo == "deathmatch"
                    ? ``
                    : `<div class="info"> ${store.state.svgs.damage} <p>Damage Made: ${jogador.damage_made} </p></div>`
                }
              </div>
              `;
            if (modo == "deathmatch") {
                playersList.appendChild(playersNeutral);
            } else {
                playersList.appendChild(playersBlue);
                playersList.appendChild(playersRed);
            }

            jogadores.forEach((jogador) => {
                if (jogador.team.toLowerCase() == "blue") {
                    nickTag.className = "containerBlue";
                    nickTag.innerHTML = `<div> 
                    <img src=${jogador.assets.agent.killfeed} alt"" > 
                    <p class='jogadores'> ${jogador.name}#${jogador.tag} </p> 
                    </div>  <p class = 'kd'>
                    <span class="kills">${jogador.stats.kills}</span>
                    /<span class="deaths"> ${jogador.stats.deaths}</span>
                    /<span class="assists"> ${jogador.stats.assists}</span>
                    </p>`;
                    playersBlue.appendChild(nickTag.cloneNode(true));
                } else if (jogador.team.toLowerCase() == "red") {
                    nickTag.className = "containerRed";
                    nickTag.innerHTML = `<p class = 'kd'>
                    <span class="kills">${jogador.stats.kills}</span>
                    /<span class="deaths"> ${jogador.stats.deaths}</span>
                    /<span class="assists"> ${jogador.stats.assists}</span>
                    </p> <div> 
                    <p class='jogadores'> ${jogador.name}#${jogador.tag} 
                    </p> <img src=${jogador.assets.agent.killfeed} alt"" > </div>`;
                    playersRed.appendChild(nickTag.cloneNode(true));
                } else {
                    nickTag.className = "containerNeutro";
                    nickTag.innerHTML = ` <div> 
                    <img src=${jogador.assets.agent.killfeed} alt"" > 
                    <p class='jogadores'> ${jogador.name}#${jogador.tag} </p>
                     </div> <p class = 'kd'>
                     <span class="kills">${jogador.stats.kills}</span>
                     /<span class="deaths"> ${jogador.stats.deaths}</span>
                    /<span class="assists"> ${jogador.stats.assists}</span>
                    </p>`;

                    playersNeutral.appendChild(nickTag.cloneNode(true));
                }
            });
            //classes
            playersNeutral.className = "playersNeutral";
            playersList.className = "playersList";
            playersBlue.className = "playersBlue";
            playersRed.className = "playersRed";
            //append elements
            matchData.appendChild(playersList);
        },
    },
    modules: {

    }
})
