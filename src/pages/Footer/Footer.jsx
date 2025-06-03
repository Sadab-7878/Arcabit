import React from 'react'
import footerlogo from '../../assets/logo_arcabit_stopka.png'

const Footer = () => {
  return (
    <>

    <div className='bg-[#000000] space-y-10'>
      {/* 1 */}
        <div className='flex justify-between mx-24 pt-24'>
            <div className='space-y-5'>
                <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest cursor-pointer'>PRODUCTS</p>
                </div>
                <div className='space-y-3'>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Home Security</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Internet Security</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Endpoint Security</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Bezpieczna Szkoła</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Ochrona Serwera</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Wersje OEM</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Android Antivirus</p>
                </div>
            </div>
            <div className='space-y-5'>
                <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest cursor-pointer'>MENU</p>
                </div>
                <div className='space-y-3'>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Wsparcie</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Kontakt</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Kariera</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Blog</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Partnerzy</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Porównanie produktów</p>
                  <p className='text-[#CCCCCC] haha font-[700] cursor-pointer'>Polityka prywatności</p>
                </div>
            </div>
            <div className='space-y-5'>

              <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest cursor-pointer'>KONTAKT</p>
                </div>

                <div className='space-y-3'>
                  <p className='font-[400] text-[#CCCCCC] haha cursor-pointer'>Arcabit Sp. z o.o.</p>
                  <p className='font-[400] text-[#CCCCCC] haha cursor-pointer'>05-082 Blizne Łaszczyńskiego,</p>
                  <p className='font-[400] text-[#CCCCCC] haha cursor-pointer'>ul. Graniczna 50 (Warszawa/Bemowo)</p>
                </div>
                <div className='space-y-3'>
                   <p className='font-[400] text-[#CCCCCC] haha cursor-pointer'>tel. (22) 532 69 00</p>
                  <p className='font-[400] text-[#CCCCCC] haha cursor-pointer'>fax (22) 201 21 82</p>
                  
                </div>

            </div>
            <div>

              <img src={footerlogo} alt="" />

            </div>
        </div>

        {/* 2 */}

        <div className='border-[0.5px] border-[#262626]'>
          
        </div>

        {/* 3 */}
        <div className='mx-24 pb-6'>

          <p className=' haha text-[14px] font-[400] text-[#777777]'>© 2025 Arcabit.</p>
        </div>
    </div>
    </>
  )
}

export default Footer