/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'shshshfpa=054d9240-7f6b-977d-b65f-7588dc3a3906-1614240010; __jdu=16142399298741246383258; pinId=6VY7uYjW_0_RJCL3fpczgw; shshshfpb=uQ4i6M%2Bl65yFvM50ZVOKkxA%3D%3D; jcap_dvzw_fp=RmtsUOwHY5DmhOe8_FzD3GOv33UyNQR46qo6qGBs2g2I57RoZXXIuYZWYCIRQ-pvW-DogQ==; user-key=1c04909a-e35f-40e6-a05e-2f1757cd1f5d; pin=13773656328_p; unick=yyattery; _tp=206P59PS5EYyH4t%2BbbjaBA%3D%3D; _pst=13773656328_p; unpl=JF8EAO1nNSttCEIADB0BGkdAQwgBW1wITB9Tbm4ABltcT1EASwAcFkB7XlVdXhRKEh9sYxRUX1NOUg4ZBCsSFXtdVV9dDE4UAGlmNWQYGxsGUQcCHxMQQ15VXlwLSRQLamIGVlxcV1cGGgcbEBNIXFFeXzhIFzNuVwVTXV1IVg0TARMbFk5dV1taCkIVAGtuNWRdUE9kBRoDGhMZS1tSW1wNexcCbmcNUlxZQl1rGmwbGhNNVVRYXwtOJwNmZwdcXFlLUwYrAysTIB0zVF9cCUkRBWdhBRldX0tRBhkKExEYQltRXl4NTBUKbWQBXW1Ze1c; __jdv=122270672|baidu|-|organic|notset|1650963382136; warehistory="7339756,"; TrackID=1n0_Tg3yqSiSrM_k2t4_IGUBDnAxazDZbF8J9msVlAilUNiSG2BA3zVRQHFf1qSDvfNzHB42VwYn0pF5UzXJp9eSMOmrE9g1uJSUOaefKlXo; cn=5; PCSYCityID=CN_320000_320600_0; areaId=12; ipLoc-djd=12-965-3395-56137; wxa_level=1; retina=1; cid=9; jxsid=16521469355731366032; appCode=ms0ca95114; webp=1; __jda=122270672.16142399298741246383258.1614239929.1651913789.1652146936.557; __jdc=122270672; mba_muid=16142399298741246383258; visitkey=24292993177582469; UM_distinctid=180aba1a1ac66e-0aefe56433837d-5437971-505c8-180aba1a1ad5d6; PPRD_P=UUID.16142399298741246383258; sc_width=390; _gia_s_local_fingerprint=ef1813782aa0f8c14112e5109630beea; jxsid_s_u=https%3A//wqs.jd.com/my/accountv2.shtml; 3AB9D23F7A4B3C9B=MBJQIKIAYOKHJBGJVYXCMFVD23LLMSB4W6BADRREDM7QH4KR4KUSNYZGAPNHIDSIZKWJKFZRRSHAKJDZTX72ELMMOU; TrackerID=_neNVxXNg0KejugqiCvGNcFoCACCabN2_l1TiyXDiehaQjhujHNBQg7TKOVxBg8NjDj73ThUurT5316RGOHA72aCJZX1qbPAp1I7O253TRu97tnFVCOqwpwGvuouyQa4QOD9HA29AA83fOCXw1Yayw; pt_key=AAJiecMNADC6dfmOcyjybzVZTuzkU8H9_JZJNR0ioGSr-NuVc3vRupUw9CV1L2p9HlofaX3SLBM; pt_pin=13773656328_p; pt_token=tt5pcwxc; pwdt_id=13773656328_p; sfstoken=tk01mc3691c60a8sM3gzKzMrMW05UxHaFxzB8vh0ijLUdd7X07mvcWEfqzui9ihJ9LC9yPtZK73bRQoTLHGmXbdWL6JM; wqmnx1=MDEyNjM5NTouY3NueDExdDFlMDM5NW5QMWsgVzVIZVYzaTg2MzQyS0VGKCU%3D; __wga=1652146958915.1652146939881.1652146939881.1652146939881.3.1; jxsid_s_t=1652146959065; shshshfp=d64081096b8f8061f30e0dfafd5e41c0; shshshsID=a4185444ae67501b5a28b79f58dbb85c_4_1652146959616; CNZZDATA1256793290=201277627-1616459330-https%253A%252F%252Fbean.m.jd.com%252F%7C1652146498; __jdb=122270672.8.16142399298741246383258|557.1652146936; mba_sid=16521469360139998004770780830.8; __jd_ref_cls=Mnpm_ComponentApplied;'
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
