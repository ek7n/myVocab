// types/nuxt-gtag.d.ts
import { NuxtConfig } from 'nuxt/schema';

declare module 'nuxt/schema' {
  interface NuxtConfig {
    gtag?: {
      id: string;
      config?: Record<string, any>;
      debug?: boolean;
    };
  }
}
