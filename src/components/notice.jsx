import { Heading } from "./heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Notice() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Heading className="text-primary font-bold">নিয়মাবলী</Heading>
        </AccordionTrigger>

        <AccordionContent>
          <p className="text-lg leading-9">
            শেয়ার এবং উপার্জন নিয়মাবলী: <br />{" "}
            <b>
              <em>১. শেয়ার লিংক:</em>
            </b>{" "}
            যদি কেউ আপনার শেয়ার করা লিঙ্কে ক্লিক করে, তাহলে পরবর্তী ৩০ দিনের
            মধ্যে তারা যেকোনো পণ্য কিনলে, আপনি বিক্রয়ের ১০% কমিশন পাবেন। <br />{" "}
            <b>
              <em>২. কমিশন হার:</em>
            </b>{" "}
            শেয়ার করা লিংক ব্যবহার করে যদি কেউ পণ্য কিনে, তবে আপনি বিক্রয়ের
            ১০% কমিশন পাবেন। <br />{" "}
            <b>
              <em>৩. মেয়াদসীমা:</em>
            </b>{" "}
            লিংক ক্লিক করার পরবর্তী ৩০ দিনের মধ্যে যে কোন পণ্য কেনা হলে কমিশন
            পাবেন। <br />{" "}
            <b>
              <em>৪. শেয়ার সীমাবদ্ধতা:</em>
            </b>{" "}
            একজন গ্রাহক আপনার শেয়ার করা লিংক ব্যবহার করে যতবার ইচ্ছা কেনাকাটা
            করতে পারে, এবং প্রতিটি কেনাকাটার জন্য কমিশন পাওয়ার যোগ্য হবে।{" "}
            <br /> ৫.{" "}
            <b>
              <em>অ্যাকাউন্ট:</em>
            </b>{" "}
            কমিশন প্রাপ্তির জন্য আপনার একটি অ্যাকাউন্ট থাকতে হবে। <br />{" "}
            <b>
              <em>৬. কমিশন পেমেন্ট:</em>
            </b>{" "}
            কমিশন শুধুমাত্র বিকাশ পেমেন্ট পদ্ধতির মাধ্যমে প্রদান করা হবে। <br />{" "}
            <b>
              <em>৭. জালিয়াতি:</em>
            </b>{" "}
            যেকোনো ধরনের জালিয়াতি বা অশ্লীল আচরণের বিরুদ্ধে ব্যবস্থা নেওয়া
            হবে। <br />{" "}
            <b>
              <em>৮. পরিবর্তন:</em>
            </b>{" "}
            আমরা নিয়মাবলী সময় সময় পরিবর্তন করতে পারি, এবং পরিবর্তনের কথা
            আপনাকে জানানো হবে। <br />{" "}
            <b>
              <em>আপনার যদি কোনো প্রশ্ন থাকে, আমাদের সাথে যোগাযোগ করুন!</em>
            </b>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
