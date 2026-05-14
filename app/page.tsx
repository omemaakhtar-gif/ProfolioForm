"use client";

import {
  Bath,
  BedDouble,
  Building2,
  Car,
  Check,
  ChevronRight,
  Dumbbell,
  FileDown,
  Home,
  Mail,
  ParkingCircle,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Waves
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const bayutGreen = "#00A862";

type IconItem = [label: string, icon: LucideIcon];
type InfoRow = [label: string, value: string];
type TransactionRow = [building: string, type: string, sqft: string, price: string];

const features: IconItem[] = [
  ["Open Plan Kitchen", Home],
  ["898 SqFt", Building2],
  ["1 Bedroom", BedDouble],
  ["2 Bathrooms", Bath],
  ["Parking", ParkingCircle],
  ["Furnished", Sofa],
  ["Marina Views", Waves],
  ["Swimming Pools", Waves],
  ["Gym", Dumbbell],
  ["Padel Court", Check],
  ["Squash Court", Check],
  ["Basketball Courts", Check]
];

const infoRows: InfoRow[] = [
  ["Type", "Apartment"],
  ["Purpose", "For Rent"],
  ["Furnishing", "Furnished"],
  ["Added On", "24 April 2026"],
  ["Ownership", "Freehold"],
  ["Balcony", "Yes"],
  ["Completion", "Ready"],
  ["Building", "Marina Gate 1"],
  ["Area", "Dubai Marina"],
  ["Reference", "HL-1842"]
];

const amenityRows: IconItem[] = [
  ["Furnished", Sofa],
  ["Parking", Car],
  ["Balcony", Building2],
  ["Lobby", Home],
  ["Reception", ShieldCheck],
  ["Gym", Dumbbell],
  ["Swimming Pool", Waves],
  ["Kids Area", Sparkles],
  ["BBQ", Check],
  ["Central AC", Check]
];

const transactions: TransactionRow[] = [
  ["Marina Gate 1", "1 Bed", "881", "124,000"],
  ["Marina Gate 2", "1 Bed", "905", "132,000"],
  ["Jumeirah Living", "1 Bed", "835", "127,500"],
  ["Silverene Tower", "1 Bed", "910", "119,000"]
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-md bg-bayut text-[15px] font-black text-white">
        B
      </div>
      <div className={light ? "text-white" : "text-ink"}>
        <div className="text-[19px] font-black leading-none tracking-tight">bayut</div>
        <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.18em] opacity-70">Profolio™</div>
      </div>
    </div>
  );
}

function BayutWordmark() {
  return (
    <img
      src="https://d36tqbe4ak6hyd.cloudfront.net/agentportal/wp-content/uploads/2020/07/bayut_logo_2x_20072020.png"
      alt="Bayut"
      className="h-auto w-[66px]"
    />
  );
}

function Toolbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1122px] items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="h-6 w-px bg-line" />
          <div>
            <div className="text-sm font-bold text-ink">Buyer Report</div>
            <div className="text-[11px] font-medium text-muted">Marina Gate 1, Dubai Marina</div>
          </div>
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-md bg-bayut px-4 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-sm">
          <FileDown size={16} />
          Download PDF
        </button>
      </div>
    </div>
  );
}

function PdfPage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`pdf-page ${className}`}>{children}</section>;
}

function MetaPill({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex min-w-[86px] items-center gap-2 rounded-lg border border-white/20 bg-white/12 px-3 py-2 text-white backdrop-blur-sm">
      <Icon size={16} />
      <div>
        <div className="text-[8px] font-bold uppercase tracking-[0.14em] opacity-70">{label}</div>
        <div className="text-[12px] font-bold">{value}</div>
      </div>
    </div>
  );
}

function PageHeader({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (
    <div>
      <div className="section-label">{label}</div>
      <h2 className="mt-3 max-w-[620px] text-[34px] font-black leading-[1.04] tracking-tight text-ink">{title}</h2>
      {children}
    </div>
  );
}

function CoverPage() {
  return (
    <PdfPage className="cover-page">
      <div className="flex h-full flex-col">
        <div className="relative flex-1">
          <img src="https://images.bayut.com/thumbnails/832629684-1066x800.webp" alt="" className="image-frame" />
          <div className="cover-overlay absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-between px-[24px] pb-[22px] pt-[20px]">
            <div>
              <BayutWordmark />
              <h1 className="mt-[15px] text-[21px] font-black leading-none tracking-[-0.03em] text-white">Buyer Report</h1>
              <div className="mt-1.5 text-[7px] font-black uppercase tracking-[0.14em] text-white/85">Powered by Bayut Profolio™</div>
            </div>
            <div className="max-w-[560px] text-white">
              <h2 className="text-[24px] font-black leading-[0.98] tracking-[-0.035em]">Marina Gate 1,</h2>
              <div className="mt-1.5 text-[19px] font-black leading-none tracking-[-0.025em]">Marina Gate, Dubai Marina, Dubai</div>
              <div className="mt-[19px] text-[28px] font-black leading-none tracking-[-0.035em]">AED 125,000</div>
              <div className="mt-0.5 text-[14px] font-extrabold leading-none">Yearly</div>
              <div className="mt-[20px] flex gap-[18px]">
                {[
                  ["1 Bedroom", BedDouble],
                  ["2 Bathrooms", Bath],
                  ["898 Sq.Ft", Building2],
                  ["Furnished", Sofa],
                  ["1 Parking Space", Car]
                ].map(([label, Icon]) => (
                  <div key={label as string} className="flex items-center gap-1 text-[8px] font-black text-white">
                    <Icon size={10} strokeWidth={2.3} />
                    {label as string}
                  </div>
                ))}
              </div>
              <a href="https://www.bayut.com/property/details-14705312.html" target="_blank" rel="noopener" className="mt-[21px] inline-flex h-[32px] items-center gap-2 rounded bg-bayut px-[18px] text-[8px] font-black text-white">
                View on Bayut Live
                <ChevronRight size={11} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-[48px] items-center justify-between bg-white px-[24px]">
          <div>
            <div className="text-[7px] font-bold leading-none text-slate-500">Generated by Sarah Khan</div>
            <div className="mt-1 text-[7px] font-bold leading-none text-slate-500">24 April 2026</div>
          </div>
          <div className="text-right">
            <div className="text-[17px] font-black leading-none tracking-[-0.035em] text-[#147454]">Home & Living</div>
            <div className="mt-1 text-[5px] font-black uppercase tracking-[0.22em] text-slate-500">Real Estate</div>
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function OverviewPage() {
  const leftFeatures = [
    "Open Plan Kitchen and Living",
    "1 Bedroom",
    "2 Bathrooms",
    "1 Parking Space",
    "Exceptional Facilities",
    "Marina Views",
    "Gyms",
    "Squash Court",
    "Jumeirah Living Hotel"
  ];
  const rightFeatures = [
    "Built-up Area 898 SqFt",
    "Balcony Size 113 sqft",
    "Furnished",
    "Superb Location",
    "Swimming Pools",
    "Padel Court",
    "Basketball / Football Courts"
  ];

  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="grid h-full grid-cols-[58.4%_41.6%] gap-7 bg-white px-12 py-10">
        <div className="pt-1">
          <div className="section-label">Property Overview</div>
          <h2 className="mt-6 max-w-[420px] text-[40px] font-black leading-[1.05] tracking-[-0.04em] text-ink">
            Premium Marina Living
            <br />
            at Marina Gate 1
          </h2>
          <p className="mt-6 max-w-[475px] text-[16px] font-semibold leading-[1.62] text-[#5D6673]">
            Home and Living is proud to offer this property for rent, located in one of the most sought-after residential
            buildings in Dubai Marina. This Marina Gate property is spacious, featuring stunning marina views and
            high-quality finishings.
          </p>
          <div className="mt-[42px] grid w-[502px] grid-cols-2 gap-x-[30px] rounded-[18px] border border-[#EEF0F2] bg-[#F4F6F7] px-7 py-[29px]">
            {[leftFeatures, rightFeatures].map((column, index) => (
              <div key={index} className="grid gap-[18px]">
                {column.map((item) => (
                  <div key={item} className="flex items-center gap-[11px] text-[13px] font-extrabold leading-tight text-[#2F3844]">
                    <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border-[1.8px] border-bayut">
                      <span className="h-[5px] w-[5px] rounded-full bg-bayut" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid h-[670px] content-start grid-rows-[210px_210px_210px] gap-5">
          {[
            "https://images.bayut.com/thumbnails/832232386-1066x800.webp",
            "https://images.bayut.com/thumbnails/832232387-1066x800.webp",
            "https://images.bayut.com/thumbnails/832232390-1066x800.webp"
          ].map((src) => (
            <div key={src} className="overflow-hidden rounded-[13px] bg-slate-100 shadow-card">
              <img src={src} alt="" className="image-frame" />
            </div>
          ))}
        </div>
      </div>
    </PdfPage>
  );
}

function GalleryPage() {
  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="h-full bg-white px-[34px] py-[32px]">
        <div className="section-label">Property Gallery</div>
        <div className="mt-[18px] grid h-[420px] grid-cols-[1.16fr_.86fr] grid-rows-[222px_184px] gap-[14px]">
          <div className="overflow-hidden rounded-xl bg-slate-100 shadow-card">
            <img src="https://images.bayut.com/thumbnails/832629686-1066x800.webp" alt="" className="image-frame" />
          </div>
          <div className="row-span-2 overflow-hidden rounded-xl bg-slate-100 shadow-card">
            <img src="https://images.bayut.com/thumbnails/832232391-1066x800.webp" alt="" className="image-frame" />
          </div>
          <div className="grid grid-cols-2 gap-[14px]">
            {[
              "https://images.bayut.com/thumbnails/832232396-1066x800.webp",
              "https://images.bayut.com/thumbnails/832629681-1066x800.webp"
            ].map((src) => (
              <div key={src} className="overflow-hidden rounded-xl bg-slate-100 shadow-card">
                <img src={src} alt="" className="image-frame" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[18px] h-[270px] overflow-hidden rounded-xl bg-slate-100 shadow-card">
          <img src="https://images.bayut.com/thumbnails/832629682-1066x800.webp" alt="" className="image-frame" />
        </div>
      </div>
    </PdfPage>
  );
}

function DetailsAmenitiesPage() {
  const mergedRows: InfoRow[] = [
    ["Type", "Apartment"],
    ["Purpose", "For Sale"],
    ["Ownership", "Freehold"],
    ["Developer", "SELECT GLOBAL DEVELOPMENT L.L.C"],
    ["Year of Completion", "2018"],
    ["Building Name", "THE RESIDENCES AT MARINA GATE 1"],
    ["Total Building Area", "610,210 sqft"],
    ["Service charges", "AED 16.08 / sqft"],
    ["Average Rent", "AED 151,508 Yearly"],
    ["Total Floors", "47"]
  ];
  const amenities: [string, LucideIcon][] = [
    ["Furnished", Sofa],
    ["Parking", Car],
    ["Balcony", Building2],
    ["Lobby", Home],
    ["Reception", ShieldCheck],
    ["Gym", Dumbbell],
    ["Swimming Pool", Waves],
    ["Kids Play Area", Sparkles],
    ["Barbeque Area", Check],
    ["Central AC", Check]
  ];

  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="h-full bg-white px-11 py-10">
        <div className="section-label">Property and Building Information</div>
        <div className="mt-[18px] overflow-hidden rounded-2xl border border-line bg-white">
          <div className="flex h-[58px] items-center border-b border-[#EAECEF] px-6 text-[12px] font-black uppercase tracking-[0.16em] text-bayut">
            Property and Building Information
          </div>
          <div className="grid grid-cols-2">
            {mergedRows.map(([label, value], index) => (
              <div key={`${label}-${value}`} className={`flex min-h-[52px] items-center justify-between gap-[18px] border-b border-[#EFF1F3] px-6 text-[12px] ${index % 2 === 0 ? "border-r border-[#EFF1F3]" : ""} ${index >= mergedRows.length - 2 ? "border-b-0" : ""}`}>
                <span className="font-extrabold leading-tight text-[#8B95A1]">{label}</span>
                <span className="text-right font-black leading-tight text-[#202A36]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[34px]">
          <div className="text-[12px] font-black uppercase tracking-[0.16em] text-bayut">Features &amp; Amenities</div>
          <div className="mt-4 grid grid-cols-5 grid-rows-2 overflow-hidden rounded-[14px] border border-line bg-white">
            {amenities.map(([label, Icon], index) => (
              <div key={label} className={`flex h-[118px] flex-col items-center justify-center gap-3 border-[#EFF1F3] text-[12px] font-black text-[#27313D] ${index % 5 === 4 ? "" : "border-r"} ${index >= 5 ? "" : "border-b"}`}>
                <Icon size={31} strokeWidth={1.9} className="text-bayut" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function MarketTransactionsPage() {
  const insightRows = [
    ["Demand Trend", "Very High", "Increased interest in furnished units.", "+12.4%"],
    ["Negotiation Margin", "1.5% - 2.0%", "Tight margins indicate strong pricing.", ""]
  ];
  const marinaGateRows = [
    ["15 Apr 2026", "1 Year", "890 sqft", "AED 126,000", "New", "Marina Gate 1"],
    ["12 Apr 2026", "1 Year", "880 sqft", "AED 135,000", "Renewal", "Marina Gate 1"],
    ["05 Apr 2026", "1 Year", "905 sqft", "AED 132,000", "New", "Marina Gate 1"],
    ["28 Mar 2026", "1 Year", "898 sqft", "AED 130,000", "New", "Marina Gate 1"],
    ["22 Mar 2026", "1 Year", "890 sqft", "AED 125,000", "Renewal", "Marina Gate 1"],
    ["15 Mar 2026", "1 Year", "910 sqft", "AED 140,000", "New", "Marina Gate 1"]
  ];
  const dubaiMarinaRows = [
    ["16 Apr 2026", "1 Year", "875 sqft", "AED 118,000", "Renewal", "Elite Residence"],
    ["10 Apr 2026", "1 Year", "920 sqft", "AED 122,000", "New", "Princess Tower"],
    ["02 Apr 2026", "1 Year", "890 sqft", "AED 120,000", "New", "Marina Pinnacle"],
    ["25 Mar 2026", "1 Year", "910 sqft", "AED 127,000", "Renewal", "The Torch"],
    ["18 Mar 2026", "1 Year", "860 sqft", "AED 115,000", "New", "Sulafa Tower"],
    ["09 Mar 2026", "1 Year", "905 sqft", "AED 124,000", "New", "Ocean Heights"]
  ];
  const transactionTable = (title: string, rows: string[][], active = false) => (
    <div>
      <div className={`inline-flex h-[23px] items-center rounded-full border px-3 text-[9px] font-black ${active ? "border-bayut bg-bayut text-white" : "border-[#D1D5DB] bg-[#F3F4F6] text-[#233044]"}`}>
        {title}
      </div>
      <div className="mt-[7px] overflow-hidden rounded-xl border border-line">
        <div className="grid min-h-6 grid-cols-[.9fr_.75fr_.85fr_.9fr_.65fr_1.1fr] items-center gap-2 bg-mist px-2.5 text-[7px] font-black uppercase tracking-[0.12em] text-[#8A93A0]">
          <div>Date</div><div>Duration</div><div>Area</div><div>Rent</div><div>Type</div><div>Building</div>
        </div>
        {rows.map((row) => (
          <div key={row.join("-")} className="grid min-h-[25px] grid-cols-[.9fr_.75fr_.85fr_.9fr_.65fr_1.1fr] items-center gap-2 border-t border-[#EFF1F3] px-2.5 text-[8.5px] font-extrabold text-[#1F2937]">
            {row.map((cell, index) => <div key={`${cell}-${index}`} className={index === 3 ? "font-black text-bayut" : ""}>{cell}</div>)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="h-full bg-white px-11 py-[26px]">
        <div className="mb-2.5 text-[12px] font-black uppercase tracking-[0.16em] text-bayut">
          Market Trends and Insights
        </div>
        <div className="grid grid-cols-[1.42fr_.8fr] gap-6">
          <div className="h-[252px] rounded-2xl border border-line bg-white px-[22px] py-[18px] shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[12px] font-black uppercase tracking-[0.16em] text-bayut">Price Trend</div>
                <div className="mt-1 text-[11px] font-extrabold text-[#8A93A0]">Rental performance in Marina Gate</div>
              </div>
              <div className="flex h-7 items-center rounded-full border border-[#D8F3E5] bg-emerald-50 px-[14px] text-[11px] font-black text-bayut">1 Year</div>
            </div>
            <svg className="mt-[9px] h-[172px] w-full" viewBox="0 0 620 218" aria-label="Rental price trend">
              <g stroke="#EEF0F2" strokeWidth="1">
                {[18, 58, 98, 138, 178].map((y) => <line key={y} x1="50" x2="610" y1={y} y2={y} />)}
                {[50, 143, 236, 329, 422, 515, 608].map((x) => <line key={x} x1={x} x2={x} y1="16" y2="180" />)}
              </g>
              <g fill="#8A93A0" fontSize="10" fontWeight="800">
                <text x="12" y="182">50K</text><text x="12" y="142">75K</text><text x="6" y="102">100K</text><text x="6" y="62">125K</text><text x="6" y="22">150K</text>
              </g>
              <path d="M50 98 C88 92 108 110 143 96 C179 82 199 88 236 78 C270 68 294 74 329 62 C365 49 387 60 422 47 C456 36 482 46 515 34 C552 20 581 24 608 30 L608 180 L50 180 Z" fill="rgba(0,168,98,.12)" />
              <path d="M50 98 C88 92 108 110 143 96 C179 82 199 88 236 78 C270 68 294 74 329 62 C365 49 387 60 422 47 C456 36 482 46 515 34 C552 20 581 24 608 30" fill="none" stroke={bayutGreen} strokeWidth="4" strokeLinecap="round" />
              <g fill="#111827" fontSize="9" fontWeight="900">
                <text x="44" y="90">100K</text><text x="135" y="88">104K</text><text x="225" y="70">112K</text><text x="318" y="54">120K</text><text x="410" y="39">128K</text><text x="506" y="27">136K</text><text x="584" y="22">140K</text>
              </g>
              <g fill="#8A93A0" fontSize="9" fontWeight="800">
                <text x="38" y="215">May 2025</text><text x="132" y="215">Jul 2025</text><text x="225" y="215">Sep 2025</text><text x="316" y="215">Nov 2025</text><text x="412" y="215">Jan 2026</text><text x="505" y="215">Mar 2026</text><text x="575" y="215">Apr 2026</text>
              </g>
            </svg>
          </div>
          <div className="h-[252px] rounded-2xl border border-line bg-white px-5 py-[18px] shadow-sm">
            <div className="text-[12px] font-black uppercase tracking-[0.16em] text-bayut">Market Insights</div>
            <div className="mt-[14px] grid gap-[14px]">
              {insightRows.map(([title, value, desc, badge]) => (
                <div key={title} className="h-[78px] overflow-hidden rounded-[13px] border border-[#EAF0EE] bg-[#FBFEFC] px-[14px] py-[13px]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[8px] font-black uppercase tracking-[0.12em] text-[#8A93A0]">{title}</div>
                      <div className="mt-[5px] text-[16px] font-black tracking-[-0.02em] text-ink">{value}</div>
                    </div>
                    {badge ? <div className="flex h-5 items-center rounded-full bg-emerald-50 px-2 text-[9px] font-black text-bayut">{badge}</div> : null}
                  </div>
                  <div className="mt-1.5 text-[10px] font-bold leading-tight text-muted">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-white px-[18px] py-4 shadow-sm">
          <div className="text-[12px] font-black uppercase tracking-[0.16em] text-bayut">Rental Transactions</div>
          <div className="mt-2.5 grid gap-2.5">
            {transactionTable("Marina Gate (1 Bed)", marinaGateRows, true)}
            {transactionTable("Dubai Marina (1 Bed)", dubaiMarinaRows)}
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function LifestyleDecisionPage() {
  const images = [
    ["Marina Views", "https://www.visitdubai.com/-/media/images/business-in-dubai/neighbourhood-guides/dubai-marina-1560x10002.jpg?ch=270&cw=397&cx=0.5&cy=0.5&rev=0c0f8d0055884f61b7c9ea0068d702fe"],
    ["Premium Amenities", "https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/ce2a9fd6-1a25-4183-b4f6-ca9405972361-4-Oct-12-2025-09-58-10-5767-AM.jpg"],
    ["Marina Walk Access", "https://d1snrxh3s61e7p.cloudfront.net/media/CACHE/images/venues/0160420e-acd9-41b5-825d-836cc97021fe/dubai-marina-walk.jpg"]
  ];

  return (
    <PdfPage className="!aspect-[1066/800]">
      <div className="h-full bg-white px-[46px] pb-7 pt-[42px]">
        <div className="grid grid-cols-[360px_1fr] items-start gap-[34px]">
          <div>
            <div className="section-label">Lifestyle &amp; Location</div>
            <h1 className="mt-6 text-[38px] font-black leading-[1.05] tracking-[-0.035em] text-ink">
              Live in the Heart of Dubai Marina
            </h1>
            <p className="mt-5 text-[15px] font-bold leading-[1.72] text-[#5E6875]">
              Enjoy vibrant waterfront living with easy access to Marina Walk, fine dining, retail, and leisure destinations.
              Perfect for professionals, couples, and investors.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-0.5">
            {images.map(([title, src]) => (
              <div key={title} className="min-w-0">
                <div className="h-[182px] overflow-hidden rounded-[14px] bg-slate-100 shadow-card">
                  <img src={src} alt="" className="image-frame" />
                </div>
                <div className="mt-3 text-center text-[13px] font-black text-[#26313E]">{title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-9 grid h-[402px] grid-cols-[230px_1fr_230px] items-center gap-[30px] rounded-[18px] border border-line bg-white px-[30px] py-[26px] shadow-sm">
          <div className="h-[330px] overflow-hidden rounded-[18px] bg-slate-100 shadow-[0_14px_30px_rgba(17,24,39,.14)]">
            <img src="/images/agent-female.png" alt="Sarah Khan" className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <div className="section-label">Your Property Advisor</div>
            <h2 className="mt-[14px] text-[42px] font-black leading-[0.96] tracking-[-0.045em] text-ink">Sarah Khan</h2>
            <div className="mt-2.5 text-[17px] font-extrabold text-[#7A8491]">Sales Consultant</div>
            <div className="mt-[18px] text-[22px] font-black tracking-[-0.02em] text-bayut">
              Home &amp; Living
              <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.22em] text-[#8A93A0]">Real Estate</span>
            </div>
            <div className="mt-7 grid gap-3 text-[13px] font-extrabold text-[#27313D]">
              <div className="flex items-center gap-3"><Phone size={16} className="text-bayut" /> +971 (0) 58 550 2511</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-bayut" /> sarahkhan@homesandliving.com</div>
              <div className="inline-flex w-max items-center justify-self-start gap-[7px] rounded-full border border-bayut bg-bayut px-3 py-[7px] text-[10px] font-black leading-none text-white shadow-[0_7px_16px_rgba(0,168,98,.14)]">
                <Check size={11} strokeWidth={3} /> TruBroker™ Verified
              </div>
              <p className="max-w-[300px] text-[11px] font-bold leading-[1.45] text-[#66717F]">
                With deep market expertise and a client-first approach, I’m here to help you secure the right
              </p>
            </div>
          </div>
          <div className="flex h-[330px] items-center justify-center border-l border-[#EEF0F2]">
            <div className="text-center font-black leading-[0.86] tracking-[-0.04em] text-bayut">
              <div className="text-[28px]">HOME</div>
              <div className="my-2 text-[22px]">&amp;</div>
              <div className="text-[28px]">LIVING</div>
              <div className="mt-[13px] text-[6px] uppercase tracking-[0.34em] text-[#8A93A0]">Real Estate</div>
            </div>
          </div>
        </div>
        <div className="flex h-12 items-end justify-between pt-[18px]">
          <div className="flex items-center gap-[9px]">
            <div className="grid h-[26px] w-[26px] place-items-center rounded-full border-[5px] border-bayut text-[12px] font-black leading-none text-bayut">b</div>
            <div>
              <div className="text-[13px] font-black leading-none text-ink">Buyer Report</div>
              <div className="mt-1 text-[6px] font-black uppercase tracking-[0.18em] text-[#8A93A0]">Powered by Bayut Profolio™</div>
            </div>
          </div>
          <div className="text-[11px] font-black text-[#8A93A0]">Page 6</div>
        </div>
      </div>
    </PdfPage>
  );
}

export default function HomePage() {
  return (
    <main className="px-0 py-2">
      <CoverPage />
      <OverviewPage />
      <GalleryPage />
      <DetailsAmenitiesPage />
      <MarketTransactionsPage />
      <LifestyleDecisionPage />
    </main>
  );
}
