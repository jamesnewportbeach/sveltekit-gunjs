import { writable } from 'svelte/store';
import GUN from 'gun';
import 'gun/sea';
import 'gun/lib/path';
import { browser } from '$app/environment';
import { type Edge, type Node } from '@xyflow/svelte';

interface location {}

export const gun = browser
	? new GUN({
			peers: [`${window.location.href.split('/')[0]}//${window.location.href.split('/')[2]}/gun`]
		})
	: global.gun;

export const nodes = writable<Node[]>([]);

export const edges = writable<Edge[]>([]);

export const location = writable<location>({});
