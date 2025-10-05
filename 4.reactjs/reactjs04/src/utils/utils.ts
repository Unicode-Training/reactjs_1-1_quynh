export const isProduction = () => {
    return import.meta.env.MODE === "production"
}