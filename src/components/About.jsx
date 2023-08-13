import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-cyan-800 to-cyan-300 text-white'>
        <div max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-500'>About</p>
            </div>
            <p className='text-xl nt-20'>
                Perkenalkan, nama saya Muhammad Raihan Maulana. Saya lulusan SMAN 6 Bekasi. Sekarang berkuliah di Universitas Indonesia, Fakultas Ilmu Komputer, Jurusan Ilmu Komputer. Selama SMA saya pernah menjadi Ketua Umum periode 2021/2022 Ekstrakulikuler SIX IT. 
            </p>
            <br />
            <p className='text-xl'>Saya menguasai HTML Cascading Style Sheets (CSS), dan JavaScript </p>
            <br />
            <p className='text-xl'> Contact: +62 8211004431 LINE: raihan475 Instagram: raihan_mauln </p>
        </div>
    </div>
  )
}

export default About