import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  label1?: {
    name: string;
    data: string | number;
  };
  label2?: {
    name: string;
    data: string | number;
  };
}

const webUrl = "https://kiyoonjung.vercel.app/";

const defaultImage = `/main.png`;

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path, image, label1, label2 } = props;
  const description = desc + " | kiyoonjung's Blog";

  const images = webUrl + (image ?? defaultImage);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: webUrl + path,
      siteName: "kiyoonjung.vercel.app",
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: label1?.name ?? "",
      ["twitter:data1"]: label1?.data ?? "",
      ["twitter:label2"]: label2?.name ?? "",
      ["twitter:data2"]: label2?.data ?? "",
      ["google-site-verification"]:
        "google-site-verification=g3jKq09mN5sWdahOwqF30Jp3Xiq2hNXVfrr14VJ6Yvo",
    },
  };
}
