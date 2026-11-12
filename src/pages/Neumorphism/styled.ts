import styled, { keyframes } from 'styled-components'
const spin=keyframes`to{transform:rotate(360deg)}`
export const Page=styled.main`min-height:100vh;background:#e8eaf4;color:#72788e;font-family:'Courier New',monospace;display:grid;place-items:center;padding:30px 20px`
export const Player=styled.section`width:min(390px,100%);padding:30px;border-radius:38px;background:#e8eaf4;box-shadow:22px 22px 44px #c9ccda,-22px -22px 44px #fff`
export const Top=styled.div`display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;text-transform:uppercase;font-size:11px;letter-spacing:.2em`
export const Round=styled.button<{ $active?:boolean }>`width:44px;height:44px;border-radius:50%;border:0;background:#e8eaf4;color:#777d92;cursor:pointer;box-shadow:${p=>p.$active?'inset 5px 5px 10px #c4c7d5,inset -5px -5px 10px #fff':'6px 6px 12px #c4c7d5,-6px -6px 12px #fff'};transition:.2s`
export const CoverWrap=styled.div<{ $playing:boolean }>`width:220px;height:220px;margin:20px auto;border-radius:50%;padding:12px;box-shadow:9px 9px 18px #c4c7d5,-9px -9px 18px #fff`
export const Cover=styled.div<{ $playing:boolean }>`width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#9e91b7,#f1c9ce 48%,#8facc4);position:relative;animation:${p=>p.$playing?spin+' 16s linear infinite':'none'};&:after{content:'';position:absolute;width:34px;height:34px;border-radius:50%;background:#e8eaf4;left:calc(50% - 17px);top:calc(50% - 17px);box-shadow:inset 3px 3px 6px #c4c7d5}`
export const Info=styled.div`text-align:center;margin:22px 0;h2{color:#62677a;font-size:20px;margin:8px}p{font-size:12px;margin:0}`
export const Range=styled.input`width:100%;accent-color:#8e95aa;height:5px;cursor:pointer`
export const Time=styled.div`display:flex;justify-content:space-between;font-size:10px;margin-top:7px`
export const Controls=styled.div`display:flex;align-items:center;justify-content:center;gap:20px;margin:20px 0`
export const Play=styled(Round)<{$playing:boolean}>`width:68px;height:68px;color:${p=>p.$playing?'#6f7690':'#777d92'};font-size:18px;box-shadow:${p=>p.$playing?'inset 7px 7px 14px #c4c7d5,inset -7px -7px 14px #fff':'6px 6px 12px #c4c7d5,-6px -6px 12px #fff'};&:hover{transform:translateY(-2px)};&:active{box-shadow:inset 5px 5px 10px #c4c7d5,inset -5px -5px 10px #fff;transform:translateY(0)}`
export const Volume=styled.div`display:flex;align-items:center;gap:12px;margin-top:12px;font-size:12px`
