import React from "react";
import images from "../../../access/Images";
const contact = [
  {
    data: " 1 Phù Đổng Thiên Vương - P8 - TP.Đà Lạt",
  },
  {
    data: " 0263 3822 246 | Fax: 0263.3823380",
  },
  {
    data: "info@dlu.edu.vn",
  },
];

export default function Footer() {
  return (
    <div className=" bottom-0 flex flex-wrap bg-primary h-[320px]">
      <div className="container mx-auto flex flex-wrap px-6">
        <div className="grid grid-cols-3  w-full max-w-full ">
          <img src={images.logo} alt="" className="w-[220px] mt-3 ml-12 "  />
          <div className="ml-4 mt-4">
            <h1 className="font-bold">Thông tin liên hệ:</h1>
            <ul className="mt-4">
              <li>
                {contact.map((contact, index) => (
                  <li key={index} className="my-2">
                    <p>{contact.data}</p>
                  </li>
                ))}
              </li>
            </ul>
          </div>
          <div className="my-2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.287790287477!2d108.44162997581702!3d11.954565636357692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112d959f88991%3A0x9c66baf1767356fa!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyDEkMOgIEzhuqF0!5e0!3m2!1svi!2s!4v1686146130318!5m2!1svi!2s"
              width="248"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
