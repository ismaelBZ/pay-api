import Tesla from './../../../assets/imgs/shared/partners/Tesla.svg'
import Microsoft from './../../../assets/imgs/shared/partners/Microsoft.svg'
import HP from './../../../assets/imgs/shared/partners/HP.svg'
import Oracle from './../../../assets/imgs/shared/partners/Oracle.svg'
import Google from './../../../assets/imgs/shared/partners/Google.svg'
import Nvidia from './../../../assets/imgs/shared/partners/Nvidia.svg'
import TeslaDark from './../../../assets/imgs/shared/partners/Tesla-dark.svg'
import MicrosoftDark from './../../../assets/imgs/shared/partners/Microsoft-dark.svg'
import HPDark from './../../../assets/imgs/shared/partners/HP-dark.svg'
import OracleDark from './../../../assets/imgs/shared/partners/Oracle-dark.svg'
import GoogleDark from './../../../assets/imgs/shared/partners/Google-dark.svg'
import NvidiaDark from './../../../assets/imgs/shared/partners/Nvidia-dark.svg'

const PartnerList = ({dark=false}) => {
  if (!dark) {
    return (
      <div
      className="m-auto flex row flex-wrap gap-10 justify-center items-center
      md:max-w-[80%] md:gap-x-20
    "
    >
      <div className="w-32 h-auto">
        <img
          src={Tesla}
          className="m-auto max-w-[110px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={Microsoft}
          className="m-auto max-w-[120px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={HP}
          className="m-auto max-w-[120px] 
          md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={Oracle}
          className="m-auto max-w-[110px]
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={Google}
          className="m-auto max-w-[80px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={Nvidia}
          className="m-auto max-w-[120px] 
            md:max-w-36"
          alt=""
        />
      </div>
    </div>
    )
  }
  if (dark) {
    return (
      <div
      className="m-auto flex row flex-wrap gap-10 justify-center items-center
      md:max-w-[80%] md:gap-x-20
      xl:max-w-full
    "
    >
      <div className="w-32 h-auto">
        <img
          src={TeslaDark}
          className="m-auto max-w-[110px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={MicrosoftDark}
          className="m-auto max-w-[120px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={HPDark}
          className="m-auto max-w-[120px] 
          md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={OracleDark}
          className="m-auto max-w-[110px]
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={GoogleDark}
          className="m-auto max-w-[80px] 
            md:max-w-36"
          alt=""
        />
      </div>
      <div className="w-32 h-auto">
        <img
          src={NvidiaDark}
          className="m-auto max-w-[120px] 
            md:max-w-36"
          alt=""
        />
      </div>
    </div>
    )
  }
}
export default PartnerList