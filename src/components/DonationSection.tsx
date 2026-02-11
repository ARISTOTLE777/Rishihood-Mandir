import { useState } from "react";
import { FadeIn, Section, SectionHeading, Divider, ScaleIn, SlideIn } from "./SectionPrimitives";
import { motion } from "framer-motion";

const presetAmounts = [501, 1100, 2100, 5100, 11000, 21000];

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DonationSection = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sankalp, setSankalp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !name || !email) return;

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay Key ID
      amount: Number(amount) * 100, // Amount in paise
      currency: "INR",
      name: "Rishihood Temple",
      description: "Donation for Shiva Temple",
      image: "https://rishihood.edu.in/wp-content/uploads/2020/08/Rishihood-University-Logo.png", // Optional: Add a logo url here
      handler: function (response: any) {
        console.log("Payment Successful", response);
        setSubmitted(true);
      },
      prefill: {
        name: name,
        email: email,
        contact: "" // Optional: Add contact number field if needed
      },
      theme: {
        color: "#d97706" // Matches the amber/gold theme
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (submitted) {
    return (
      <Section id="donate" alternate>
        <FadeIn>
          <div className="text-center py-12">
            <p className="text-secondary text-4xl mb-4">🙏</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Thank You for Your Sacred Contribution
            </h3>
            <p className="text-foreground/70 text-lg max-w-lg mx-auto">
              Your generosity helps nurture a space of reflection and inner growth for
              generations of students. May this act of giving bring you peace and fulfillment.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm text-secondary underline underline-offset-4 hover:opacity-80"
            >
              Make another contribution
            </button>
          </div>
        </FadeIn>
      </Section>
    );
  }

  return (
    <Section id="donate" alternate>
      <FadeIn>
        <Divider />
        <SectionHeading>A Temple Rooted in Timeless Tradition</SectionHeading>
        <p className="text-center text-foreground/70 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Your contribution supports the creation of a sacred space dedicated to
          reflection, balance and inner growth for generations of students.
          <br />
          <span className="italic mt-2 block">
            This is not merely an architectural structure. It is a space shaped by intention.
          </span>
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-background rounded-lg p-8 shadow-sm border border-border"
        >
          {/* Preset amounts */}
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-3 font-medium">
              Select Amount (₹)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {presetAmounts.map((a, i) => (
                <motion.button
                  key={a}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                  type="button"
                  onClick={() => setAmount(String(a))}
                  className={`py-2.5 rounded-md text-sm font-medium border transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${amount === String(a)
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background border-border text-foreground/70 hover:border-primary/40"
                    }`}
                >
                  ₹{a.toLocaleString("en-IN")}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Custom amount */}
          <div className="mb-5">
            <label className="block text-sm text-muted-foreground mb-1.5 font-medium">
              Or enter custom amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="1"
              className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm text-muted-foreground mb-1.5 font-medium">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-muted-foreground mb-1.5 font-medium">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              maxLength={255}
              className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          {/* Sankalp */}
          <div className="mb-7">
            <label className="block text-sm text-muted-foreground mb-1.5 font-medium">
              Message / Sankalp <span className="text-muted-foreground/50">(optional)</span>
            </label>
            <textarea
              value={sankalp}
              onChange={(e) => setSankalp(e.target.value)}
              placeholder="Share your intentions or blessings..."
              rows={3}
              maxLength={500}
              className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-md"
          >
            Donate Now
          </button>
        </form>
      </FadeIn>
    </Section>
  );
};

export default DonationSection;
