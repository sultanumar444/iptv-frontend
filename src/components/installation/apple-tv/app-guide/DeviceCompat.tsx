import AppleTvAppGuideSpecs from "./Specs";
import AppleTvAppGuideSteps from "./Steps";
import parseInlineLinks from "../../shared/parseInlineLinks";

type DeviceEntry = {
  heading: string;
  /** Ett stycke, eller flera stycken (visas i ordning). Stöder [text](url)-länkar. */
  body: string | string[];
  specsImage?: string;
  specs?: { label: string; value: string }[];
  /** Valfri varningstext (OBS-ruta) under specifikationerna */
  specsWarning?: string;
  /** "stack" (standard) = bild ovanför specs. "row" = bild vänster / specs höger i en rad (sm+). */
  specsLayout?: "stack" | "row";
  /** Rama in Specifikationer-avsnittet i ett kort med bakgrund/border. */
  specsCard?: boolean;
  stepsId?: string;
  stepsHeading?: string;
  stepsColumns?: 2 | 3 | 4 | 5;
  /** "row" (standard) = nummer bredvid texten. "stacked" = nummer centrerat ovanför centrerad text. */
  stepsNumberLayout?: "row" | "stacked" | "side";
  steps?: { step: number; image: string; body: string }[];
};

export default function AppleTvAppGuideDeviceCompat({
  heading,
  devices,
}: {
  heading: string;
  devices: DeviceEntry[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {heading}
      </h2>

      <div className="mt-8 space-y-12">
        {devices.map((device) => (
          <div key={device.heading}>
            <div className="text-center">
              <h3 className="text-xl font-bold sm:text-2xl">
                {device.heading}
              </h3>
              <div className="mt-3 space-y-3 text-white/70">
                {(Array.isArray(device.body) ? device.body : [device.body]).map(
                  (paragraph, i) => (
                    <p key={i}>{parseInlineLinks(paragraph)}</p>
                  )
                )}
              </div>
            </div>

            {device.specsImage && device.specs && (
              <div className="mt-8">
                <AppleTvAppGuideSpecs
                  image={device.specsImage}
                  specs={device.specs}
                  compact
                  compactLayout={device.specsLayout}
                  card={device.specsCard}
                  warning={device.specsWarning}
                />
              </div>
            )}

            {device.steps && (
              <div className="mt-8">
                {device.stepsHeading && (
                  <h3
                    id={device.stepsId}
                    className="mb-8 scroll-mt-24 text-center text-2xl font-bold sm:text-3xl"
                  >
                    {device.stepsHeading}
                  </h3>
                )}
                <AppleTvAppGuideSteps
                  id={device.stepsHeading ? undefined : device.stepsId}
                  steps={device.steps}
                  columns={device.stepsColumns ?? 2}
                  imageAspect="landscape"
                  numberLayout={device.stepsNumberLayout ?? "row"}
                  bare
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
