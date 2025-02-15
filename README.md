# Hitch and Stitch

A creatures game for promoting student-student interactions on a university campus.
Programmed using a Next.JS, React, TypeScript, Tailwindcss, PostgreSQL tech stack.

## Gameplay
Hitchins are little creatures who live on campus, learning alongside each of us--but they need some help!
Hitchins are too small to take themselves to class, so they need to hitch a ride from a student, their active "pardner".
Eventually (NOT MVP): Hitchins will have cute little interactions with their pardner that will build exp and their relationship. (Tamagotchi-esque).
Eventually (NOT VMP): Hitchins have built in, procgen characteristics that lend them personality (they have a dream).

After a while with a certain pardner, a hitchin will ask to move on to a new pardner with a certain trait (say, an art major)--they want to keep learning!
The current pardner will have to find a student in the target group to whom they'll transfer the hitchin.
The active pardner will present a transfer offer QR code, and let the recipient scan the code.

The same hitchin may come back your way after you trade them away--stay on the lookout!
Even when you're not *active* with a hitchin, you'll still be able to see their status: you've built a little relationship! 

## Todo (MVP)
Authentication/account                          Anna
Basic hitchin generation (limited procgen)
Hitchin transfer (QR codes)

## Data Structures

**Pardner** 		// Tracks all info about a player (pardner), including login info, bio info for targeting, and .
- id			number
- username		string
- password		string
- major			enum
- activeRelationship	Relationship
- inactiveRelationships	Relationship[]	

**Hitchin**		// Tracks all info about a hitchin
- id			number
- name			string 		// Stores the name of the Hitchin, which is displayed
- exp			number		// Gains experience with interactions, time, and transfers.
- activeRelationship	Relationship	// Tracks the relationship with the Hitchin's current pardner
- inactiveRelationships	Relationship[]	// Contains all the pardner that the Hitchin has learned from
- moveOutTime		Date		// Time that the hitchin will want to/started to want to find a new pardner.
- targetArchetype	Target		// During migration, contains the traits that the hitchin requires in a new pardner.

**Target** 		// During migration, tracks requirements that the Hitchin wants to see in their new Pardner. Target fields are null unless they are required. Implement major first.
- id			number
- major			enum		// enum ["Computer Science", "Natural Science", "Social Science", "Humanity", "Art", "Undeclared"]

**Relationship**	// Represents a pair of Hitchin and Pardner. Created when they first meet, never destroyed. Significant extensions to come later.
- id			number
- pardner		Pardner
- hitchin		Hitchin
- active		boolean
