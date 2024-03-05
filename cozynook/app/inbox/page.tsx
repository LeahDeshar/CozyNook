import Conversations from "../components/inbox/Conversations";

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>

      <Conversations />
      <Conversations />
      <Conversations />
    </main>
  );
};

export default InboxPage;
