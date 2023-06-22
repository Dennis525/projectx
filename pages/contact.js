import Wrapper from "@/components/Wrapper";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      <Wrapper>
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="text-base mb-4">
            For any product-related queries or assistance, please feel free to
            reach out to us.
          </div>
          <div className="text-base mb-2">
            Email: electronicshopcontact@shop.com
          </div>
          <div className="text-base mb-4">Phone: +254000000</div>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8162138549364!2d36.8252385746689!3d-1.2841835356231788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11299e51a7b3%3A0xcd91ac01b702b7de!2sLuthuli%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1685784666129!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-sm text-gray-500">
            Our customer support team is available from Monday to Friday, 9:00
            AM to 5:00 PM.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
