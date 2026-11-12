import styled, { keyframes } from 'styled-components'
export const Page=styled.main`min-height:100vh;background:#f7f7f5;color:#111;font-family:Inter,Arial,sans-serif;`
export const Hero=styled.section`width:min(1180px,calc(100% - 40px));margin:0 auto;padding:110px 0 70px;display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:end;@media(max-width:760px){grid-template-columns:1fr;padding:70px 0 45px}`
export const Eyebrow=styled.p`font-size:11px;text-transform:uppercase;letter-spacing:.22em;color:#777;margin:0 0 20px`
export const Title=styled.h1`font-family:Georgia,serif;font-size:clamp(64px,10vw,130px);line-height:.78;font-weight:400;margin:0;letter-spacing:-.07em;span{display:block;margin-left:.55em;color:#aaa}`
export const Intro=styled.div`max-width:390px;padding-bottom:8px;p{line-height:1.8;color:#666;font-size:15px;margin:0 0 28px}`
export const Action=styled.button`border:1px solid #111;background:#111;color:#fff;padding:14px 22px;border-radius:0;cursor:pointer;transition:.25s;box-shadow:5px 5px 0 #d7d7d1;&:hover{transform:translate(-2px,-2px);box-shadow:9px 9px 0 #d7d7d1}`
export const Work=styled.section`width:min(1180px,calc(100% - 40px));margin:0 auto;padding-bottom:80px`
export const Toolbar=styled.div`display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ddd;padding:18px 0;margin-bottom:18px;@media(max-width:560px){align-items:flex-start;gap:12px;flex-direction:column}`
export const Tabs=styled.div`display:flex;gap:18px`
export const Tab=styled.button<{ $active:boolean }>`border:0;background:transparent;padding:5px 0;color:${p=>p.$active?'#111':'#999'};font-weight:${p=>p.$active?700:400};border-bottom:${p=>p.$active?'1px solid #111':'1px solid transparent'};cursor:pointer`
export const Grid=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:18px;@media(max-width:760px){grid-template-columns:1fr}`
export const Card=styled.article`position:relative;background:white;border:1px solid #ededed;min-height:290px;padding:16px;cursor:pointer;overflow:hidden;transition:.35s cubic-bezier(.2,.8,.2,1);&:hover{transform:translateY(-7px);box-shadow:0 18px 40px rgba(0,0,0,.08)}&:hover img{transform:scale(1.03)}`
export const Image=styled.img`width:100%;height:210px;object-fit:cover;filter:grayscale(1);transition:.45s`
export const Meta=styled.div`height:62px;display:flex;justify-content:space-between;align-items:center;h3{font-size:14px;margin:0;font-weight:600}span{font-size:11px;color:#999}`
const pop=keyframes`from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}`
export const Modal=styled.div`position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100;display:grid;place-items:center;padding:20px;animation:${pop} .2s`
export const ModalBox=styled.div`width:min(560px,100%);background:#fff;padding:32px;position:relative;h2{font-family:Georgia,serif;font-size:42px;margin:10px 0}p{color:#666;line-height:1.7}`
export const Close=styled.button`position:absolute;right:18px;top:18px;border:0;background:#eee;width:36px;height:36px;cursor:pointer`
