import styled from 'styled-components'
export const Page=styled.main`min-height:100vh;background:#f5f0e6;color:#111;font-family:Arial Black,Impact,sans-serif;`
export const Hero=styled.section`width:min(1180px,calc(100% - 40px));margin:auto;padding:70px 0 55px;display:grid;grid-template-columns:1.3fr .7fr;gap:25px;@media(max-width:760px){grid-template-columns:1fr}`
export const Head=styled.h1`font-size:clamp(70px,13vw,180px);line-height:.72;letter-spacing:-.09em;margin:0;text-transform:uppercase;span{color:#ed4d2e;-webkit-text-stroke:2px #111}`
export const Sticker=styled.div`align-self:end;background:#ffdf00;border:4px solid #111;padding:22px;transform:rotate(-3deg);font-size:14px;line-height:1.4;box-shadow:10px 10px 0 #111`
export const Marquee=styled.div`border-top:4px solid #111;border-bottom:4px solid #111;background:#ed4d2e;color:white;padding:12px;overflow:hidden;font-size:18px;text-transform:uppercase;letter-spacing:.08em`
export const Work=styled.section`width:min(1180px,calc(100% - 40px));margin:auto;padding:50px 0`
export const Tabs=styled.div`display:flex;margin-bottom:18px;button{border:4px solid #111;border-right:0;background:white;padding:14px 20px;font-weight:900;cursor:pointer}& button:last-child{border-right:4px solid #111}& button.active{background:#111;color:#fff}`
export const Grid=styled.div`display:grid;grid-template-columns:repeat(12,1fr);gap:16px;article:nth-child(1){grid-column:span 7}article:nth-child(2){grid-column:span 5}article:nth-child(3){grid-column:span 5}article:nth-child(4){grid-column:span 7}@media(max-width:700px){article{grid-column:span 12!important}}`
export const Card=styled.article<{ $color:string }>`min-height:260px;background:${p=>p.$color};border:4px solid #111;padding:18px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:.12s;&:hover{transform:translate(5px,-5px);box-shadow:-8px 8px 0 #111}h3{font-size:clamp(28px,5vw,60px);line-height:.85;margin:0;text-transform:uppercase}span{font-size:11px}`
export const Modal=styled.div`position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:100;display:grid;place-items:center;padding:20px`
export const ModalBox=styled.div`width:min(620px,100%);background:#ffdf00;border:5px solid #111;box-shadow:14px 14px 0 #ed4d2e;padding:28px;position:relative;h2{font-size:48px;line-height:.9;margin:20px 0;text-transform:uppercase}`
export const Close=styled.button`float:right;border:3px solid #111;background:white;width:42px;height:42px;font-weight:900;cursor:pointer`
