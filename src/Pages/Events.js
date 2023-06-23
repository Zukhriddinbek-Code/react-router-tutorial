import { defer, json, useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not load data" };
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events!" }, { status: 500 })
    // );
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    // const respon = new Response("Any data", { status: 201 });
    // return respon;
    return resData.events;
  }
}

export function loader() {
  defer({
    events: loadEvents(),
  });
}
