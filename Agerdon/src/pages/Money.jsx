import React, { useState } from 'react';

export const Money = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const paymentMethods = ['카카오페이', '네이버페이', '제휴결제', '카드결제'];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-10">
      <div className="flex gap-10">
     
        <div className="w-2/3 space-y-6">
        
          <div className="bg-white border border-gray-300 rounded-lg px-5 py-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">결제 수단</h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedMethod === method}
                    onChange={() => setSelectedMethod(method)}
                    className="accent-main w-5 h-5"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

 
          {selectedMethod === '카드결제' && (
            <div className="bg-white border border-gray-300 rounded-lg px-5 py-4 shadow-sm">
              <div className="flex items-center justify-between">
           
                <div className="flex items-center">
                  <img
                    src="/card.jpg"
                    alt="등록된 카드"
                    className="h-20 object-contain rounded-1/2xl"
                  />
                  <p className="ml-4 text-gray-700">체크 8656</p>
                </div>

                <div className="text-3xl text-gray-400 cursor-pointer px-3">+</div>
              </div>
            </div>
          )}
        </div>

       
        <div className="w-1/3">
          <div className="bg-white border border-gray-300 rounded-lg px-6 py-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">결제 상세</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between">
                <span>내 운임 요금</span>
                <span>55,000원</span>
              </li>
              <li className="flex justify-between">
                <span>중간거리 이용 요금 비율</span>
                <span>90%</span>
              </li>
              <li className="flex justify-between">
                <span>중운임 요금</span>
                <span>53,000원</span>
              </li>
              <li className="flex justify-between">
                <span>동승자 요금</span>
                <span>26,950원</span>
              </li>
              <li className="flex justify-between font-semibold">
                <span>내 요금</span>
                <span>28,050원</span>
              </li>
            </ul>

            <hr className="my-4" />

            <div className="flex justify-between items-center font-semibold text-base">
              <span></span>
              <span>총 28,050원</span>
            </div>

            <button className="w-full bg-main text-white mt-5 py-2 rounded-lg font-semibold cursor-pointer">
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

