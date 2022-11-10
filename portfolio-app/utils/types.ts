//default structure items
export interface Sanity {
  _createdAt: Date,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: Date,
}

//skill data structure
export interface skillSchema extends Sanity {
  progress: string,
  skillImage: {
    _type: string,
    asset: {
      _ref: any,
      _type: string
    }
  }
}

///work data structure
export interface workSchema extends Sanity {
  year: string,
  role: string,
  company: string,
  description: string,
}


///about data structure
export interface aboutSchema extends Sanity {
  about: string
}

//contact logo data structure
export interface contactImageSchema extends Sanity {
  contactLogo: {
    _type: string,
    asset: {
      _ref: any,
      _type: string
    }
  },
  name: string,
}