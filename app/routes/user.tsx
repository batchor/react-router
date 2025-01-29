import type { Route } from "./+types/user"

export default function User({
    params,
}: Route.ComponentProps) {
    params.username;
    return <h1>{params.username}</h1>
}
