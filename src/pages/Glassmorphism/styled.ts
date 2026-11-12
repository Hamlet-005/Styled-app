import styled, { keyframes } from 'styled-components'
const float=keyframes`50%{transform:translateY(-18px) rotate(8deg)}`
export const Page=styled.main`min-height:100vh;color:white;font-family:Verdana,sans-serif;background:linear-gradient(135deg,#7456d8 0%,#d966a4 48%,#f5a76c 100%);position:relative;overflow:hidden;`
export const Orb=styled.div<{ $one?:boolean }>`position:absolute;width:${p=>p.$one?'260px':'180px'};height:${p=>p.$one?'260px':'180px'};border-radius:50%;background:${p=>p.$one?'rgba(100,220,255,.8)':'rgba(255,221,125,.75)'};left:${p=>p.$one?'8%':'auto'};right:${p=>p.$one?'auto':'10%'};top:${p=>p.$one?'18%':'68%'};filter:blur(8px);animation:${float} 7s ease-in-out infinite`
export const Shell=styled.div`width:min(1180px,calc(100% - 40px));margin:auto;padding:42px 0 80px;position:relative`
export const Dashboard=styled.section`display:grid;grid-template-columns:300px 1fr;gap:20px;margin-top:38px;@media(max-width:820px){grid-template-columns:1fr}`
export const Glass=styled.section`background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.32);border-radius:28px;backdrop-filter:blur(22px);box-shadow:0 20px 50px rgba(73,40,122,.18)`
export const Side=styled(Glass)`padding:28px;text-align:center`
export const Sun=styled.div`width:110px;height:110px;margin:20px auto;border-radius:50%;background:linear-gradient(145deg,#fff5b5,#ffb26b);box-shadow:0 12px 35px rgba(255,181,96,.42)`
export const Temp=styled.h1`font-size:72px;margin:10px 0;font-weight:300;small{font-size:24px}`
export const City=styled.div`font-size:14px;letter-spacing:.18em;text-transform:uppercase;opacity:.85`
export const Main=styled(Glass)`padding:28px`
export const Top=styled.div`display:flex;justify-content:space-between;align-items:center;margin-bottom:24px`
export const Toggle=styled.button<{ $metric:boolean }>`width:72px;height:36px;border-radius:20px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.12);color:white;cursor:pointer;span{display:block;width:28px;height:28px;margin-left:${p=>p.$metric?'2px':'38px'};border-radius:50%;background:white;transition:.25s}`
export const Forecast=styled.div`display:grid;grid-template-columns:repeat(5,1fr);gap:10px;@media(max-width:620px){grid-template-columns:repeat(2,1fr)}`
export const Day=styled.button<{ $active:boolean }>`min-height:150px;border-radius:20px;border:1px solid ${p=>p.$active?'rgba(255,255,255,.7)':'transparent'};background:${p=>p.$active?'rgba(255,255,255,.24)':'rgba(255,255,255,.08)'};color:white;cursor:pointer;transition:.2s;svg{font-size:30px;}&:hover{transform:translateY(-5px)}span{display:block;font-size:24px;margin-top:12px}`
export const Stats=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px;@media(max-width:620px){grid-template-columns:1fr}`
export const Stat=styled.div`background:rgba(255,255,255,.09);border-radius:18px;padding:16px;small{opacity:.65}strong{display:block;margin-top:8px;font-size:18px}`
