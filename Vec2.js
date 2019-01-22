class Vec2 {
	constructor(x = 0, y = 0) {
		this.set(x, y);
	}

	set(x, y) {
		this.x = x;
		this.y = y;

		return this;
	}

	copy() {
		return new Vec2(this.x, this.y);
	}

	add(x, y = 0) {
		this.x += x;
		this.y += y;

		return this;
	}

	sub(x, y = 0) {
		this.x -= x;
		this.y -= y;

		return this;
	}

	mult(x, y = y) {
		this.x *= x;
		this.y *= y;

		return this;
	}

	div(x, y = x) {
		this.x /= x;
		this.y /= y;

		return this;
	}

	negateX() {
		this.x = -this.x;

		return this;
	}

	negateY() {
		this.y = -this.y;

		return this;
	}

	negate() {
		return this.negateX().negateY();
	}
}
