export default function Audience() {
  return (
    <section className="mb-32 grid gap-16 md:grid-cols-2">
      <div>
        <h3 className="font-medium mb-4">This is for</h3>
        <ul className="space-y-2 text-neutral-700">
          <li>Latino real estate agents in Miami-Dade and Broward</li>
          <li>Agents investing consistently in paid lead generation</li>
          <li>Teams with structured lead follow-up</li>
        </ul>
      </div>

      <div>
        <h3 className="font-medium mb-4">This is not for</h3>
        <ul className="space-y-2 text-neutral-700">
          <li>Brand-only or design-only projects</li>
          <li>One-off ad experiments</li>
          <li>Hands-off clients</li>
        </ul>
      </div>
    </section>
  )
}
