/**
 * Så lägger du till instruktioner för en ny app (t.ex. iPlayTV):
 * 1. Skapa en ny fil här i mappen, t.ex. "iplaytv.ts" (kopiera "iptvx.ts"
 *    som mall och byt ut texten).
 * 2. Importera filen nedan och lägg till den i `guides`-listan.
 *
 * Appar utan egen fil här visar automatiskt en "guiden är på väg"-sida.
 */

import iptvx from "./iptvx";
import iplaytv from "./iplaytv";
import perfectIptv from "./perfect-iptv";
import iptvExpert from "./iptv-expert";
import xtreamIptv from "./xtream-iptv";
import gseSmartIptvPro from "./gse-smart-iptv-pro";
import iptvStreamer from "./iptv-streamer";
import iptvSmarters from "./iptv-smarters";
import iboPlayer from "./ibo-player";
import iptvPro from "./iptv-pro";
import televizoIptv from "./televizo-iptv";
import setIptv from "./set-iptv";
import netIptv from "./net-iptv";
import tivimate from "./tivimate";
import iptvExtreme from "./iptv-extreme";
import duplexPlay from "./duplex-play";
import hotIptv from "./hot-iptv";
import xuiIptvPlayer from "./xui-iptv-player";
import smartStb from "./smart-stb";
import megaIptv from "./mega-iptv";
import iptvWorld from "./iptv-world";
import nineXtreamIptv from "./9xtream-iptv";
import implayerIptv from "./implayer-iptv";
import myiptvPlayer from "./myiptv-player";
import mytvonline from "./mytvonline";

export type { AppleTvAppGuide } from "./types";

const guides = [
  iptvx,
  iplaytv,
  perfectIptv,
  iptvExpert,
  xtreamIptv,
  gseSmartIptvPro,
  iptvStreamer,
  iptvSmarters,
  iboPlayer,
  iptvPro,
  televizoIptv,
  setIptv,
  netIptv,
  tivimate,
  iptvExtreme,
  duplexPlay,
  hotIptv,
  xuiIptvPlayer,
  smartStb,
  megaIptv,
  iptvWorld,
  nineXtreamIptv,
  implayerIptv,
  myiptvPlayer,
  mytvonline,
];

export function getAppleTvAppGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
