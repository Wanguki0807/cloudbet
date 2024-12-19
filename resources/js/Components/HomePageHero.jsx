import React from 'react'
import CustomButton from './CustomButton'
import { Link } from '@inertiajs/react'

function HomePageHero() {

  return (
    <>
        <section>
            <div className='h-[100svh] relative'>
                <div className="h-full relative">
                    <div data-color="purple" className="background_item w-embed u-height-70 bg-[#141414]">
                        <svg width="100%" height="100%" viewBox="0 0 1512 713" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
                        <g opacity="0.25">
                            <path d="M1294.3 1C1158.07 238.291 1158.07 475.727 1294.3 713.018H1543C1336.78 477.753 1334.48 240.462 1543 1L1294.3 1Z" fill="url(#paint0_linear_4853_34039)"></path>
                            <path d="M630.138 713.052H879.847C835.493 475.761 835.493 238.325 879.847 1.03394L630.138 1.03394C674.348 242.955 674.924 471.276 630.138 713.052Z" fill="url(#paint1_linear_4853_34039)"></path>
                            <path d="M1211.36 1L962.655 1C916.716 238.291 916.716 475.727 962.655 713.018H1211.36C1097.88 477.753 1096.29 240.606 1211.36 1Z" fill="url(#paint2_linear_4853_34039)"></path>
                            <path d="M217.557 1C353.789 238.291 353.789 475.727 217.557 713.018H-31C175.219 477.753 177.523 240.462 -31 1L217.701 1H217.557Z" fill="url(#paint3_linear_4853_34039)"></path>
                            <path d="M300.506 1L549.208 1C595.146 238.291 595.146 475.727 549.208 713.018H300.506C413.984 477.753 415.569 240.606 300.506 1Z" fill="url(#paint4_linear_4853_34039)"></path>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_4853_34039" x1="1367.56" y1="1" x2="1367.56" y2="713.018" gradientUnits="userSpaceOnUse">
                            <stop stop-color="currentColor"></stop>
                            <stop offset="0.76" stop-color="var(--swatch--dark)"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_4853_34039" x1="754.992" y1="1.03394" x2="754.992" y2="713.052" gradientUnits="userSpaceOnUse">
                            <stop stop-color="currentColor"></stop>
                            <stop offset="0.76" stop-color="var(--swatch--dark)"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_4853_34039" x1="1069.78" y1="1" x2="1069.78" y2="713.018" gradientUnits="userSpaceOnUse">
                            <stop stop-color="currentColor"></stop>
                            <stop offset="0.76" stop-color="var(--swatch--dark)"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear_4853_34039" x1="144.365" y1="1" x2="144.365" y2="713.018" gradientUnits="userSpaceOnUse">
                            <stop stop-color="currentColor"></stop>
                            <stop offset="0.76" stop-color="var(--swatch--dark)"></stop>
                            </linearGradient>
                            <linearGradient id="paint4_linear_4853_34039" x1="442.084" y1="1" x2="442.084" y2="713.018" gradientUnits="userSpaceOnUse">
                            <stop stop-color="currentColor"></stop>
                            <stop offset="0.76" stop-color="var(--swatch--dark)"></stop>
                            </linearGradient>
                        </defs>
                        </svg>
                    </div> 
                </div>
                <div className='absolute top-0 bottom-0 right-0 left-0 flex gap-12 md:gap-[4rem] items-center justify-center flex-col'>
                    <div>
                        <h2 className='text-brand-text-color font-extrabold uppercase text-2xl sm:text-4xl md:text-5xl text-center'>
                            #1 crypto  
                             <strong className='text-brand-orange'>
                              &nbsp;casino & <br /> sportsbook
                            </strong>
                        </h2>
                    </div>
                    <div>
                        <div className='relative u-vflex-center-bottom'>
                            
                            <div class="flex z-10 w-[100vw] absolute bottom-[45%] justify-center items-center sm:w-[80vw]">
                                <svg width="100%" height="100%" viewBox="0 0 1512 84" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                                <path d="M-503.43 -137.768L-504.206 -135.516C335.743 153.988 1176.25 153.988 2016.2 -135.516L2018.03 -136.145V-138.073V-665.922V-670.401L2014.06 -668.315C1182.63 -230.792 344.196 -225.901 -502.071 -668.319L-506.029 -670.388V-665.922L-506.029 -141.867L-506.029 -138.074V-137.768H-503.43Z" stroke="url(#paint0_radial_4841_45016)" stroke-width="5.40947"></path>
                                <defs>
                                    <radialGradient id="paint0_radial_4841_45016" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(749.615 88.6251) rotate(-90) scale(256.581 568.673)">
                                    <stop stop-color="#DFFD51"></stop>
                                    <stop offset="1" stop-color="#141114" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                                </svg>
                            </div>
                            <div className='relative z-20'>
                                <CustomButton value="Join Now" className='border-brand-yellow px-7 py-3 cursor-pointer bg-brand-yellow font-bold'  />
                            </div>
                        </div>
                       
                        
                    </div>
                    <div>
                    <Link href="http://www.trustpilot.com/review/www.cloudbet.com" target="_blank" class="flex flex-col items-center gap-4 justify-center md:flex-row text-brand-text-color">
                        <div class="flex items-center justify-center gap-3 flex-col sm:flex-row">
                            <div class="text-center">Trusted since 2013</div>
                            <div class="w-embed">
                                <svg width="133" height="25" viewBox="0 0 133 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4601_172678)">
                            <path d="M25.25 0H0.5V25H25.25V0Z" fill="#00B67A"></path>
                            <path d="M52.0635 0H27.3135V25H52.0635V0Z" fill="#00B67A"></path>
                            <path d="M78.874 0H54.124V25H78.874V0Z" fill="#00B67A"></path>
                            <path d="M105.687 0H80.9375V25H105.687V0Z" fill="#00B67A"></path>
                            <path d="M132.5 0H120.125V25H132.5V0Z" fill="#DCDCE6"></path>
                            <path d="M120.125 0H107.75V25H120.125V0Z" fill="#00B67A"></path>
                            <path d="M12.8754 16.8492L16.6395 15.8857L18.2121 20.7815L12.8754 16.8492ZM21.5379 10.5211H14.9121L12.8754 4.21899L10.8387 10.5211H4.21289L9.57539 14.4273L7.53867 20.7294L12.9012 16.8232L16.2012 14.4273L21.5379 10.5211Z" fill="white"></path>
                            <path d="M39.6879 16.8492L43.452 15.8857L45.0246 20.7815L39.6879 16.8492ZM48.3504 10.5211H41.7246L39.6879 4.21899L37.6512 10.5211H31.0254L36.3879 14.4273L34.3512 20.7294L39.7137 16.8232L43.0137 14.4273L48.3504 10.5211Z" fill="white"></path>
                            <path d="M66.4994 16.8492L70.2635 15.8857L71.8361 20.7815L66.4994 16.8492ZM75.1619 10.5211H68.5361L66.4994 4.21899L64.4627 10.5211H57.8369L63.1994 14.4273L61.1627 20.7294L66.5252 16.8232L69.8252 14.4273L75.1619 10.5211Z" fill="white"></path>
                            <path d="M93.3129 16.8492L97.077 15.8857L98.6496 20.7815L93.3129 16.8492ZM101.975 10.5211H95.3496L93.3129 4.21899L91.2762 10.5211H84.6504L90.0129 14.4273L87.9762 20.7294L93.3387 16.8232L96.6387 14.4273L101.975 10.5211Z" fill="white"></path>
                            <path d="M120.125 16.8492L123.889 15.8857L125.462 20.7815L120.125 16.8492ZM128.788 10.5211H122.162L120.125 4.21899L118.089 10.5211H111.463L116.825 14.4273L114.789 20.7294L120.151 16.8232L123.451 14.4273L128.788 10.5211Z" fill="white"></path>
                            </g>
                            <defs>
                            <clipPath id="clip0_4601_172678">
                            <rect width="132" height="25" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-3 flex-col sm:flex-row">
                            <div class="text-center">4.5 out of 5</div>
                            <div class="w-embed flex items-center justify-center">
                                <svg width="90" height="21" viewBox="0 0 90 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4601_172695)">
                                <path d="M23.8852 7.39368H32.8952V8.99771H29.353V18.0166H27.4039V8.99771H23.877V7.39307H23.8846L23.8852 7.39368ZM32.5106 10.3244H34.1762V11.8092H34.2073C34.2626 11.5992 34.3643 11.3967 34.5137 11.2015C34.8332 10.7832 35.2655 10.4589 35.7629 10.2645C36.0155 10.1672 36.2845 10.1163 36.5563 10.1144C36.7597 10.1144 36.9097 10.1218 36.9886 10.1299C37.0668 10.1373 37.1449 10.1521 37.2314 10.1595V11.7938C37.1038 11.7721 36.9756 11.7546 36.8468 11.7413C36.7189 11.7266 36.5903 11.7192 36.4616 11.7191C36.1628 11.7191 35.8805 11.779 35.6135 11.892C35.3465 12.0038 35.1183 12.1761 34.9225 12.3942C34.7136 12.6379 34.5536 12.9176 34.4508 13.2187C34.3332 13.5485 34.2779 13.9228 34.2779 14.3509V18.0092H32.503V10.3244H32.5106ZM45.3933 18.0172H43.6496V16.945H43.6178C43.3978 17.3353 43.0762 17.6429 42.6439 17.8752C42.2116 18.1074 41.7717 18.2272 41.3241 18.2272C40.2638 18.2272 39.4933 17.9802 39.0228 17.4774C38.5511 16.9752 38.3153 16.218 38.3153 15.2057V10.325H40.0908V15.0408C40.0908 15.7159 40.2243 16.1958 40.4996 16.4731C40.7666 16.7504 41.1512 16.8931 41.6382 16.8931C42.0152 16.8931 42.3216 16.8406 42.5727 16.7276C42.8244 16.6152 43.0285 16.4731 43.1779 16.2853C43.3349 16.1056 43.4449 15.8808 43.5161 15.6257C43.586 15.3706 43.6178 15.0933 43.6178 14.7937V10.3324H45.3933V18.0172ZM48.4174 15.5509C48.4727 16.0451 48.6685 16.3909 49.0067 16.5929C49.3519 16.7881 49.7607 16.8931 50.24 16.8931C50.4053 16.8931 50.5935 16.8777 50.8058 16.8554C51.0175 16.8326 51.2216 16.7801 51.4027 16.7134C51.5909 16.6454 51.7397 16.5404 51.8655 16.4058C51.9838 16.2699 52.0385 16.0982 52.0308 15.8808C52.0298 15.7799 52.0069 15.6803 51.9637 15.5886C51.9204 15.4968 51.8577 15.415 51.7797 15.3484C51.6221 15.2063 51.4263 15.1013 51.1821 15.0111C50.9102 14.9196 50.6319 14.8469 50.3494 14.7937C50.0353 14.7338 49.7213 14.6659 49.3996 14.5985C49.0755 14.5304 48.7555 14.4453 48.441 14.3434C48.1459 14.2516 47.8677 14.115 47.6164 13.9389C47.3716 13.7729 47.172 13.5516 47.0347 13.2941C46.886 13.0316 46.8148 12.7092 46.8148 12.3194C46.8148 11.8994 46.9248 11.5548 47.1371 11.2694C47.3513 10.9864 47.6277 10.7535 47.9464 10.5875C48.2888 10.4117 48.6569 10.2877 49.0379 10.22C49.4384 10.1527 49.8236 10.115 50.1847 10.115C50.6011 10.115 51.0016 10.1601 51.3792 10.2429C51.7448 10.3189 52.0933 10.4585 52.4078 10.6549C52.7142 10.8426 52.9653 11.0897 53.17 11.3899C53.3741 11.6894 53.5 12.0569 53.5546 12.4843H51.7009C51.6144 12.0798 51.4256 11.8024 51.1199 11.6672C50.8134 11.5251 50.46 11.4572 50.0671 11.4572C49.9412 11.4572 49.7918 11.4646 49.6196 11.4874C49.4536 11.5089 49.2902 11.5466 49.132 11.5999C48.9874 11.6516 48.8561 11.7334 48.7474 11.8395C48.6946 11.8949 48.6535 11.9598 48.6266 12.0306C48.5997 12.1014 48.5873 12.1767 48.5903 12.2521C48.5903 12.4621 48.6685 12.627 48.8179 12.7542C48.9673 12.8815 49.1638 12.9865 49.4072 13.0767C49.6507 13.1594 49.926 13.2342 50.24 13.2941C50.5541 13.354 50.8757 13.4213 51.2063 13.4892C51.528 13.5566 51.842 13.6467 52.1567 13.7437C52.4707 13.8413 52.7454 13.9766 52.9895 14.1489C53.233 14.3212 53.4294 14.5312 53.5782 14.7863C53.7275 15.0408 53.8064 15.3632 53.8064 15.7381C53.8064 16.1952 53.6964 16.5781 53.4758 16.9005C53.2565 17.2155 52.9736 17.4774 52.6278 17.6726C52.2657 17.8752 51.8735 18.0219 51.465 18.1074C51.0495 18.1962 50.6254 18.2413 50.2 18.242C49.7235 18.2472 49.2484 18.1918 48.7868 18.0771C48.3545 17.9647 47.9775 17.7998 47.6635 17.583C47.3531 17.3639 47.0979 17.0792 46.9171 16.7504C46.7366 16.4206 46.6419 16.0228 46.6266 15.5658H48.4174V15.5509ZM54.2774 10.3257H55.6207V8.01565H57.3963V10.3257H58.9983V11.5918H57.3969V15.701C57.3969 15.8802 57.4045 16.0309 57.4204 16.1655C57.4357 16.2934 57.4751 16.4058 57.5304 16.4953C57.5905 16.5894 57.6817 16.6609 57.7891 16.6979C57.9074 16.743 58.0561 16.7659 58.2608 16.7659C58.3861 16.7659 58.5119 16.7659 58.6378 16.7578C58.7637 16.7504 58.8889 16.7356 59.0148 16.7053V18.0172C58.8183 18.0401 58.6219 18.0549 58.4414 18.0771C58.2511 18.0986 58.0596 18.1087 57.868 18.1074C57.3969 18.1074 57.0199 18.0623 56.7364 17.9802C56.4541 17.8974 56.2259 17.7702 56.0689 17.6052C55.9036 17.4403 55.8019 17.2377 55.739 16.9901C55.6777 16.7115 55.6437 16.428 55.6372 16.1433V11.606H54.294V10.3238H54.2781L54.2774 10.3257ZM60.2551 10.3257H61.9365V11.367H61.9683C62.2188 10.9174 62.5646 10.6024 63.0122 10.4078C63.4696 10.2102 63.9654 10.1104 64.466 10.115C65.1018 10.115 65.6516 10.22 66.1233 10.4374C66.5944 10.6474 66.9873 10.9402 67.3013 11.3145C67.6154 11.6894 67.8436 12.1242 68.0006 12.6196C68.1606 13.1349 68.2401 13.6706 68.2365 14.2088C68.2365 14.7258 68.1659 15.2279 68.0241 15.7084C67.8939 16.172 67.6783 16.6087 67.3878 16.9975C67.1022 17.3723 66.7313 17.6778 66.3039 17.89C65.864 18.1148 65.3535 18.2272 64.7566 18.2272C64.4956 18.2269 64.2352 18.2042 63.9784 18.1593C63.7223 18.1144 63.4722 18.0417 63.2327 17.9425C62.9949 17.8461 62.7725 17.7171 62.5722 17.5595C62.3746 17.4063 62.2024 17.2245 62.0618 17.0203H62.03V20.859H60.2551V10.3244V10.3257ZM66.4609 14.1785C66.4613 13.8366 66.4138 13.4963 66.3198 13.1668C66.2327 12.8547 66.0889 12.5601 65.8951 12.2972C65.7112 12.047 65.4726 11.8395 65.1965 11.6894C64.8998 11.5337 64.5673 11.4538 64.2302 11.4572C63.4839 11.4572 62.9181 11.7042 62.5411 12.1996C62.1641 12.6943 61.9753 13.3546 61.9753 14.1785C61.9753 14.5683 62.023 14.9284 62.1247 15.2582C62.2264 15.588 62.3682 15.8734 62.5722 16.113C62.7693 16.3533 63.0045 16.5404 63.2798 16.6751C63.5544 16.8177 63.8767 16.8851 64.2378 16.8851C64.6466 16.8851 64.9841 16.8029 65.267 16.6454C65.541 16.4923 65.7769 16.2825 65.9581 16.0309C66.1386 15.7758 66.2727 15.4904 66.3509 15.1686C66.4232 14.8433 66.4601 14.5114 66.4609 14.1785ZM69.595 7.39368H71.3705V8.99833H69.595V7.39368ZM69.595 10.325H71.3705V18.0172H69.595V10.325ZM72.9573 7.39368H74.7328V18.0172H72.9573V7.39368ZM80.1764 18.2272C79.5318 18.2272 78.9584 18.1222 78.4562 17.9202C77.9747 17.7284 77.5389 17.4425 77.1759 17.0802C76.8229 16.7107 76.5525 16.2741 76.3819 15.798C76.195 15.2725 76.1021 14.7197 76.1072 14.1637C76.1072 13.5788 76.2013 13.0396 76.3819 12.5442C76.5526 12.0684 76.823 11.632 77.1759 11.2626C77.5211 10.9025 77.9533 10.6252 78.4562 10.4226C78.9584 10.22 79.5318 10.115 80.1764 10.115C80.8204 10.115 81.3938 10.22 81.8967 10.4226C82.3995 10.6252 82.8236 10.9106 83.177 11.2626C83.5299 11.6319 83.8001 12.0683 83.9704 12.5442C84.1509 13.039 84.245 13.5788 84.245 14.1637C84.245 14.7567 84.1509 15.3033 83.9704 15.798C83.8002 16.2742 83.53 16.7108 83.177 17.0802C82.8312 17.4403 82.3995 17.7177 81.8967 17.9202C81.3938 18.1222 80.8204 18.2272 80.1764 18.2272ZM80.1764 16.8851C80.5693 16.8851 80.9145 16.8029 81.205 16.6454C81.4882 16.4923 81.7326 16.2796 81.9202 16.0228C82.1084 15.7684 82.2419 15.4756 82.3366 15.1532C82.4231 14.8308 82.4701 14.5009 82.4701 14.1637C82.4701 13.8339 82.4231 13.5115 82.3366 13.1817C82.2556 12.8688 82.1144 12.5737 81.9202 12.312C81.7322 12.0577 81.4878 11.8477 81.205 11.6974C80.9145 11.5399 80.5693 11.4572 80.1764 11.4572C79.7836 11.4572 79.4377 11.5399 79.1472 11.6974C78.8663 11.85 78.6226 12.0596 78.4327 12.312C78.2413 12.5753 78.1002 12.8698 78.0163 13.1817C77.9293 13.5022 77.8842 13.8322 77.8821 14.1637C77.8821 14.5009 77.9298 14.8308 78.0163 15.1532C78.1027 15.4756 78.2439 15.7684 78.4327 16.0228C78.6208 16.2779 78.8567 16.4879 79.1472 16.6454C79.4377 16.8103 79.7836 16.8851 80.1764 16.8851ZM84.7638 10.3257H86.107V8.01565H87.8826V10.3257H89.4846V11.5918H87.8826V15.701C87.8826 15.8802 87.8902 16.0309 87.9054 16.1655C87.9213 16.2934 87.9608 16.4058 88.0161 16.4953C88.076 16.5895 88.1673 16.661 88.2748 16.6979C88.3931 16.743 88.5418 16.7659 88.7465 16.7659C88.8717 16.7659 88.9976 16.7659 89.1235 16.7578C89.2494 16.7504 89.3746 16.7356 89.5005 16.7053V18.0172C89.304 18.0401 89.1076 18.0549 88.927 18.0771C88.7367 18.0986 88.5452 18.1087 88.3536 18.1074C87.8826 18.1074 87.505 18.0623 87.2221 17.9802C86.9398 17.8974 86.7116 17.7702 86.5546 17.6052C86.3899 17.4403 86.2876 17.2377 86.2246 16.9901C86.1635 16.7115 86.1295 16.428 86.1229 16.1433V11.606H84.7796V10.3238H84.7638V10.3257Z" fill="white"></path>
                                <path d="M21.811 7.39262H13.6733L11.1597 0L8.63714 7.39324L0.5 7.38521L7.09045 11.9583L4.56921 19.3429L11.1597 14.7772L17.7425 19.3429L15.2289 11.9583L21.811 7.39262Z" fill="#04DA8D"></path>
                                <path d="M15.7945 13.6305L15.2287 11.9585L11.1602 14.7774L15.7945 13.6305Z" fill="#126849"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_4601_172695">
                                <rect width="89" height="21" fill="white" transform="translate(0.5)"></rect>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                </div>
                <div className='relative bottom-[10%] md:bottom-[15%] '>
                    <a aria-label="scroll down the page" href="#first-section" class="indicator_wrap flex transition-all items-center justify-center mx-auto max-w-full ">
                        <div data-background-color="surface-2" data-w-id="6a4e3ebb-312d-305c-11af-154b957aa846" className="icon-btn size-12 p-[0.25rem] rounded-full bg-[#26202b]">
                            <div data-background-color="background" className="icon-wrap bg-swatch-dark p-[0.75rem] flex items-center rounded-full w-full h-full justify-center relative ">
                                <div data-background-color="surface-2" class="icon_hover" className='opacity-0 '>
                                </div>
                                <svg viewBox="0 0 20 12" fill="#e0e0e0" width="100%" height="100%" vector-path="non-scaling-stroke" aria-hidden="true" class="u-position-relative">
                                    <path d="M0.742697 1.05727C1.2634 0.536573 2.10762 0.536573 2.62832 1.05727L9.68551 8.11446L16.7427 1.05727C17.2634 0.536573 18.1076 0.536573 18.6283 1.05727C19.149 1.57797 19.149 2.42219 18.6283 2.94289L10.6283 10.9429C10.1076 11.4636 9.2634 11.4636 8.7427 10.9429L0.742697 2.94289C0.221998 2.42219 0.221998 1.57797 0.742697 1.05727Z"></path>
                                </svg>
                            </div>
                        </div>            
                    </a>
                </div>   
            </div>
            
        </section>
    </>
  )
}

export default HomePageHero
