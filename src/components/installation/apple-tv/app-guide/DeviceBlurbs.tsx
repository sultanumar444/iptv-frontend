import parseInlineLinks from "../../shared/parseInlineLinks";

export default function AppleTvAppGuideDeviceBlurbs({
  devices,
}: {
  devices: { heading: string; body: string | string[] }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-8 text-center">
        {devices.map((device) => (
          <div key={device.heading}>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {device.heading}
            </h2>
            {(Array.isArray(device.body) ? device.body : [device.body]).map(
              (paragraph, i) => (
                <p key={i} className="mt-4 text-white/70">
                  {parseInlineLinks(paragraph)}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
