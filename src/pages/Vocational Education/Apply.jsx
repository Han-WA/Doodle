import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

export const Apply = () => {
  return (
    <>
      <section className="partners py-16" sytle={{ paddingBottom: "20px" }}>
        <div className="container">
          <div>
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/108498232114044648516/form/1FAIpQLScgdfjJApFBzAJ8bjgXBSghyRBmMfX7-0-wNrQKBhP7546pLA/classic.js/?div=ff-compose"
              onSubmitForm={() => console.log("Form submitted")}
            />
          </div>
        </div>
      </section>
    </>
  );
};
