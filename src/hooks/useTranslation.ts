import { useRouter } from "next/router";

export const useTranslation = (locale?: string) => {
    const router = useRouter();

    return (
        key: string,
        variables?: { [variable: string]: string | number }
    ) => {
        let data = require(`../../../../../public/locales/${
            locale ?? router.locale
        }.json`);
        const keyPart = key.split(".");

        for (let i = 0; i < keyPart.length; i++) {
            data = data[keyPart[i]];
        }

        let translation: string = data ?? key;

        for (const [variable, value] of Object.entries(variables ?? {})) {
            translation = translation.replace(`{{${variable}}}`, String(value));
        }

        return translation;
    };
};
