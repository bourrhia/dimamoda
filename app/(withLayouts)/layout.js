import Box from "@mui/material/Box";
import Header from "@/components/LayoutFiles/Header/Header";
import Footer from "@/components/LayoutFiles/Footer/Footer";
import NavBar from "@/components/LayoutFiles/NavBar/NavBar";
import "../globals.css";
import MyStoreProvider from "../../redux/provider";
import theme from "@/components/ThemeRegistry/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata = {
  title: "Vêtements de Qualité pour Toute la Famille - Mode en Ligne",
  description:
    "Découvrez notre boutique en ligne dédiée aux vêtements de qualité pour adultes et enfants. Une large gamme de prêt-à-porter pour tous les styles et occasions. Style, confort et accessibilité au rendez-vous.",
  verification: {
    google: "vhE-g4kU_zSbGT8rQ0joqjSLsYqyvJm-fF9GqSrzS_o",
  },
  keywords: [
    "boutique de vêtements en ligne Maroc",
    "vêtements femme en ligne Maroc",
    "vêtements homme tendance Maroc",
    "pantalons de sport homme Maroc",
    "vestes légères pour femme Maroc",
    "survêtements sport homme Maroc",
    "pyjamas confortables pour femme Maroc",
    "mode en ligne Maroc",
    "prêt-à-porter femme Maroc",
    "prêt-à-porter homme Maroc",
    "doudounes pas cher Maroc",
    "grandes tailles vêtements femme Maroc",
    "grandes tailles vêtements homme Maroc",
    "vêtements livraison gratuite Maroc",
    "achat vêtements en ligne au Maroc",
    "meilleure boutique de mode en ligne Maroc",
    "Vêtements de sport",
    "Pantalons de sport",
    "Manteaux et vestes",
    "Sweats, vestes à capuches",
    "Survêtements, ensembles",
    "Veste de sport",
    "Capuches",
    "Pyjamas",
    "Vêtements de sport maroc",
    "Pantalons de sport maroc",
    "Manteaux et vestes maroc",
    "Sweats, vestes à capuches maroc",
    "Survêtements, ensembles maroc",
    "Veste de sport maroc",
    "Capuches maroc",
    "Pyjamas maroc",
    "Vêtements pour femme",
    "Vêtements pour homme",
    "Vêtements pour fille",
    "Vêtements pour garçon",
    "Vêtements femme maroc",
    "Vêtements homme maroc",
    "Vêtements fille maroc",
    "Vêtements garçon maroc",
    "Vêtements Grandes taille pour femme",
    "Vêtements Grandes taille pour homme",
    "Tuniques ensembles pour femme",
    "Doudonnes pour homme",
    "vêtements en ligne",
    "prêt-à-porter",
    "mode adulte",
    "mode enfant",
    "vêtements confortables",
    "vêtements tendences",
    "style intemporel",
    "vêtements tendance",
    "mode accessible",
    "tendance mode",
  ],
  icons: {
    icon: "/favicdimalamode.png",
  },
  authors: {
    name: "DimaLamode",
    url: "https://www.dimalamode.com",
  },

  openGraph: {
    title: "Vêtements de Qualité pour Toute la Famille - Mode en Ligne",
    description:
      "Découvrez notre boutique en ligne dédiée aux vêtements de qualité pour adultes et enfants. Une large gamme de prêt-à-porter pour tous les styles et occasions.",
    url: "https://www.dimalamode.com", // Add the canonical URL of your page
    type: "website", // Use 'website' or 'article', depending on the content
    images: [
      {
        url: "https://www.dimalamode.com/opengraph-image.png", // Full URL of the image
        alt: "Vêtements de Qualité pour Toute la Famille - Mode en Ligne.",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image", // Use the "summary_large_image" card type for a large preview
    site: "@dimalamode", // Replace with your actual Twitter handle
    creator: "@dimalamode", // Replace with your actual Twitter handle
    title: "Vêtements de Qualité pour Toute la Famille - Mode en Ligne",
    description:
      "Découvrez notre boutique en ligne dédiée aux vêtements de qualité pour adultes et enfants. Une large gamme de prêt-à-porter pour tous les styles et occasions.",
    url: "https://www.dimalamode.com", // Add the canonical URL of your page
    images: [
      {
        // url: "https://www.dimalamode.com/twitter-image.png", // Full URL of the Twitter image
        url:
          "https://www.dimalamode.com/twitter-image.png?cachebuster=" +
          new Date().getTime(),
        alt: "Vêtements de Qualité pour Toute la Famille - Mode en Ligne.",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <MyStoreProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  minHeight: "100vh",
                  overflow: "-moz-scrollbars-non",
                  margin: 0,
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0px",
                    background: "transparent",
                    display: "none",
                  },
                }}
              >
                <Header />
                <Box
                  component="main"
                  role="main"
                  tabIndex="-1"
                  sx={{
                    outline: 0,
                    maxWidth: "1312px",
                  }}
                >
                  <NavBar />
                  {props.children}
                </Box>
              </Box>
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </MyStoreProvider>
      </body>
    </html>
  );
}
