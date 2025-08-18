import Modal from "@/components/ui/Modal";
import TitleSection from "@/components/ui/TitleSection";
import Contacts from "@/components/Contacts";
import FormServices from "@/components/FormServices";

export default function ContactsPage() {
  return (
    <>
      <Modal />
      <TitleSection>Контакты</TitleSection>
      <Contacts />
      <FormServices backgroundImage="/p-2.JPG" />
    </>
  );
}
