export function normalizeCollege(college = {}) {
  return {
    id: college.id ?? college._id ?? college.slug,

    name: college.name ?? 'Unnamed college',

    location:
      typeof college.location === 'object'
        ? `${college.location.city || ''}, ${college.location.state || ''}`
        : college.location ?? college.city ?? 'Location unavailable',

    state:
      college.location?.state ??
      college.state ??
      '',

    rating:
      college.rating ??
      college.averageRating ??
      null,

    fees:
      typeof college.fees === 'object'
        ? `₹${college.fees.min || 'Not disclosed'} - ₹${college.fees.max || 'Not disclosed'}`
        : college.fees ?? 'Not disclosed',

    placementRate:
      college.placements?.placementRate ??
      college.placementRate ??
      college.placement_percentage ??
      0,

    courses:
      Array.isArray(college.courses)
        ? college.courses.map((course) =>
            typeof course === 'object' ? course.name : course
          )
        : [],

    image:
      college.image ??
      college.coverImage ??
      '',

    type:
      college.type ??
      'College',

    overview:
      college.overview ??
      college.description ??
      '',

    reviews:
      college.reviews ??
      [],

    accreditation:
      Array.isArray(college.accreditation)
        ? college.accreditation.join(', ')
        : college.accreditation ?? '',
  };
}