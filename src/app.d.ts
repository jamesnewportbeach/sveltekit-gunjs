// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface Platform {}

		interface PageData {
			path: string;
			chats: [any];
		}
	}
}

export { PageData };
